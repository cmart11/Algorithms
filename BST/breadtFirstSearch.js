class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        let queue = [this]
        while (queue.length > 0) {
            let curr = queue.shift()
            array.push(curr.name)
            for (const child of curr.children) {
                queue.push(child)
            }
        }
        return array
    }
}

const myTree = new Node('A')

myTree.addChild('B').addChild('C').addChild('first')
myTree.children[0].addChild('D').addChild('E')
myTree.children[1].addChild('Cristian').addChild('last')

console.log(myTree.breadthFirstSearch([]))
