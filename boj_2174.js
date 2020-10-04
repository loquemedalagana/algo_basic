const alphabetPattern = /[a-zA-Z]/;
var R, C, N, M;
var inputLineCnt = 0;
var robots = [];
var MAP = [];

const inRange = (r, c) => {
    return r>=1 && c>=1 && r <= R && c <= C;
}

const turn = dir => {
    switch (dir) {
    case EAST:
        return NORTH;
    case WEAST:
        return SOUTH;
    case NORTH:
        return WEAST;
    case SOUTH:
        return EAST;
    }
}

const getReadLine = () => {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

const rl = getReadLine();

const move = (idx, ord, loop) => {
    console.log(robots[idx]);
    if (ord == 'F') {
		for (let i = 0; i < loop; i++) {
			const r = robots[idx].r, c = robots[idx].c, dir = robots[idx].dir;
			const nR = r + dr[dir], nC = c + dc[dir];
			MAP[r][c] = 0;
			if (!inRange(nR, nC)) return -1;
			else if (MAP[nR][nC]) return MAP[nR][nC];
			else {
                MAP[nR][nC] = idx;
                
                robots[idx].r = nR;
                robots[idx].c = nC;
			}
		}
	}
	else if (ord == 'L') {
        const dir = robot[idx].dir;
		for (let i = 0; i < loop; i++) {
			robot[idx].dir = turn(dir);
		}
	}
	else if (ord == 'R') {
		const dir = robot[idx].dir;
		for (let i = 0; i < loop; i++) {
			robot[idx].dir = turn(dir)^1;
		}
	}

	return 0;
}

const dr = [ -1, 1, 0, 0 ];
const dc = [ 0, 0, -1, 1 ];

const EAST = 1;
const WEAST = 0;
const SOUTH = 2;
const NORTH = 3;

const start = rl => {
    rl.on('line', line => {
        inputLineCnt++;
        const inputs = line.split(' ');
        if(inputLineCnt === 1){
            R = parseInt(inputs[0]);
            C = parseInt(inputs[1]);
            MAP = Array.from(Array(R+1), () => Array(C+1).fill(0));
        }
        else if (inputLineCnt === 2){
            N = parseInt(inputs[0]);
            M = parseInt(inputs[1]);
        }
        else if (inputLineCnt > 2 && N !== undefined && inputLineCnt <= 2+N){
            let dir;
            switch(inputs[2]){
                case 'W':
                    dir = WEAST;
                    break;
                case 'E':
                    dir = EAST;
                    break;
                case 'S':
                    dir = SOUTH;
                    break;
                case 'N':
                    dir = NORTH;
                    break;
            }

            const robot = {
                r: parseInt(inputs[0]),
                c: parseInt(inputs[1]),
                dir
            };
            MAP[robot.r][robot.c] = inputLineCnt-2;
            robots.push(robot);
        }
        else if (inputLineCnt > 2+N){
            console.log(robots);
            const robotNum = parseInt(inputs[0]);
            const ord = inputs[1];
            const loop = parseInt(inputs[2]);

            console.log(robotNum, ord, loop);
            const res = move(robotNum, ord, loop);

            if(res === -1){
                console.log(`Robot ${robotNum} crashes into the wall`);
                process.exit();
            }
            else if (res >= 1){
                console.log(`Robot ${robotNum} crashes into robot ${res}`);
                process.exit();
            }
            else {
                if(inputLineCnt === 2+N+M){
                    console.log('OK');
                }
            }
        }
    }).on('close', () => {
        process.exit();
    })
}

start(rl);