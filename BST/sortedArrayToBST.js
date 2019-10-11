class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor() {
        this.head = null
    }

    sortedArrayToBST(array, start, end) {
        if (start > end) {
            return null
        }

        let midd = Math.floor(start + end) / 2

        let node = new Node(array[midd])
        node.left = this.sortedArrayToBST(array, start, midd - 1)

        node.right = this.sortedArrayToBST(array, midd + 1, end)

        return node
    }

    inOrderTraversal(tree, array) {
        if (tree !== null) {
            this.inOrderTraversal(tree.left, array)
            array.push(this.value)
            this.inOrderTraversal(tree.right, array)
        }
        return array
    }
}

const tree = new BinaryTree()



let array = [1, 2, 3, 4, 5, 6, 10]

console.log(tree)