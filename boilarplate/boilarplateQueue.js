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