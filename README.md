# 자바스크립트 알고리즘 문제풀이(Beakjoon)
<ul>
    <li>코딩 테스트 수준의 문제들로 유형 분류해서 정리합니다.</li>
    <li>유용한 라이브러리나 boilarplate 코드 공유합니다.</li>
    <li>질문, 조언, 지적 환영합니다!</li>
</ul>

<hr/>

## js 문자열 체크

``` javascript
const numPattern = /[0-9]/; //숫자 있는지 체크
const alphabetPattern = /[a-zA-Z]/; //알파벳 있는지 체크
const specialCharacterPattern = /[~!@#$%^&*()_+|<>?:{}]/; //특수문자 체크

const checkSpace = str => { //공백 체크
    return str.search(/\s/) !== -1 ? true : false;
};
```

## ja 알파벳 배열
``` javascript
const upperCase = new Array(26).fill(0).map((_,i) => String.fromCharCode(i+65));
const lowerCase = new Array(26).fill(0).map((_,i) => String.fromCharCode(i+97));
```

## 정규식
``` javascript
varType = varType.replace(/\s/g, '').replace(/]\[/gi, '[]');
```


```
int[][][] a[], b[][], c[][][];
[ 'int[][][]', 'a[]', 'b[][]', 'c[][][]' ]
int[[][]][] a;
int[[][]][][] b;
int[[][]][][][] c;
```

## JS 정수 정렬

``` javascript
arr.sort((first, second) => first-second); //내림차순은 반대로
```

## JS 다차원 배열 생성

``` javascript
MAP = Array.from(Array(H+1), () => Array(W+1).fill(0));
check = Array.from(Array(H+1), () => Array.from(Array(W+1), () => Array(4).fill(0)));
```

## js map, foreach index find
https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array/20798567

``` javascript
temp.forEach((e, i) => {
    if(e === '#') {
        console.log(i);                    
    }
})
```

## js permutation

``` javascript
const permutation = arr => {
    return arr.reduce((list, element) => {
        console.log(list, element);
        let newList = [];
        list.forEach(seq => {
            for(let i = seq.length; i>=0; i--){
                let newSeq = [].concat(seq);
                newSeq.splice(i, 0, element);
                newList.push(newSeq);
            }
        })
        return newList;
    }, [[]]);
}

```

## js queue
``` javascript
function Queue() {
    this.elements = [];
    Queue.prototype.push = element => {
        this.elements.push(element);
    }    
    Queue.prototype.pop = () => this.elements.shift();
    Queue.prototype.empty = () => this.elements.length === 0;
    Queue.prototype.front = () => !this.empty() ? this.elements[0] : undefined;
    Queue.prototype.size = () => this.elements.length;    
}
```

## js pair
``` javascript
function Pair (first, second) {
    this.first = first;
    this.second = second;
}
```

## JS map sort
https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object/31159284
<br/>
<pre>
c++은 자동으로 정렬해주지만 자스는 직접 해줘야 한다.
</pre>

## 참고 블로그
https://dev-muko.com/entry/1%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%ED%8E%B81-Nodejs%EB%A1%9C-%EB%B0%B1%EC%A4%80BOJ-%EB%8B%A8%EA%B3%84%EB%B3%84%EB%A1%9C-%ED%92%80%EC%96%B4%EB%B3%B4%EA%B8%B0%EB%A5%BC-%ED%92%80%EC%96%B4%EB%B3%B4%EB%8B%A4?category=907653