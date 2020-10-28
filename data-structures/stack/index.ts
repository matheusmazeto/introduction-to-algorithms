/* Stack data-structure. It's work is based on the LIFO method (last-IN-first-OUT).
 * It means that elements added to the stack are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, he pops from the stack.
 * This is a class-based implementation of a Stack. It provides functions
 * 'push' - to add an element, 'pop' - to remove an element from the top.
 * Also it implements 'length', 'last' and 'isEmpty' properties and
 * static isStack method to check is an object the instance of Stack class.
 */

class Stack {
  constructor() {
    this.stack = []
    this.top = 0
  }

  push(newValue) {
    this.stack.push(newValue)
    this.top += 1
  }

  pop() {
    if (this.top === 0) {
      throw new Erro('Empty stack!')
    } else {
      this.top -= 1
      return this.stack.pop()
    }
  }

  get length() {
    return this.top
  }

  get isEmpty() {
    return this.top === 0
  }

  get last() {
    if (this.top !== 0) {
      return this.stack[this.stack.length - 1]
    }
    return null
  }

  static isStack(el) {
    return el instanceof Stack
  }
}

const newStack = new Stack()

console.log('Is it a Stack?', Stack.isStack(newStack))
console.log('Is stack empty? ', newStack.isEmpty)
newStack.push('Hello world')
newStack.push(42)
newStack.push({ a: 6, b: 7 })
console.log('The length of stack is ', newStack.length)
console.log('Is stack empty? ', newStack.isEmpty)
console.log('Give me the last one ', newStack.last)
console.log('Pop the latest ', newStack.pop())
console.log('Give me the last one ', newStack.last)
console.log('Pop the latest ', newStack.pop())
console.log('Give me the last one ', newStack.last)
console.log('Pop the latest ', newStack.pop())
console.log('Give me the last one ', newStack.last)
console.log('Is stack empty? ', newStack.isEmpty)
