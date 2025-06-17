

export default class Stack<T>{
    private list: T[];

    constructor(...args:T[]){
        this.list = args
    }

    push(el:T): number{
        this.list.push(el);
        return this.list.length
    }

    pop(): T | string{
        if(!this.list.length) return "UNDERFLOW"
        return this.list.pop()!;
    }

    peek() :string | T{
        if(!this.list.length) return "NO ELEMENT";
        return this.list[this.list.length-1]
    }


    isEmpty() : boolean{
        return this.list.length === 0
    }

    size(): number{
        return this.list.length;
    }
}
