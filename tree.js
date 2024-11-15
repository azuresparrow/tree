/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    if(!this.root) return 0; // no tree

    function recursiveSum(node) {
      if(node === null) return 0; //empty

      let childrenSum = 0;
      node.children.forEach((child)=>{
        childrenSum += recursiveSum(child)
      })
      childrenSum += node.val;
      return childrenSum;
    }
    return recursiveSum(this.root);

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0; // no tree

    function recursiveCountEvens(node) {
      if(node === null) return 0; //empty

      let childrenEven = 0;
      node.children.forEach((child)=>{
        childrenEven += recursiveCountEvens(child)
      })
      if(node.val % 2 === 0) childrenEven++;
      return childrenEven;
    }
    return recursiveCountEvens(this.root);

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0; // no tree

    function recursiveNumGreater(node, lowerBound) {
      if(node === null) return 0; //empty

      let childrenNumGreater = 0;
      node.children.forEach((child)=>{
        childrenNumGreater += recursiveNumGreater(child, lowerBound)
      })
      if(lowerBound < node.val) childrenNumGreater++;
      return childrenNumGreater;
    }
    return recursiveNumGreater(this.root, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
