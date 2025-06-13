

class Stack<T>{
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

const myNewStack :Stack<number> = new Stack(3,5,6,7,8)

console.log(myNewStack)

console.log(myNewStack.isEmpty())

console.log(myNewStack.push(4343))

console.log(myNewStack)

console.log(myNewStack.pop())

console.log(myNewStack.pop())

console.log(myNewStack.peek())