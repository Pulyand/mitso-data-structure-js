const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addWithIn(this._root, data);

    function addWithIn(node, value) {
      if (!node) return new Node (value);

      if (node.data === value) return node;

      if (value < node.data) {
        node.left = addWithIn(node.left, value);
      } else {
        node.right = addWithIn(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    function searchWithIn(node, value) {
      if (!node) return false;

      if (node.data === value) return true;

      return value < node.data ? searchWithIn(node.left, value) : searchWithIn(node.right, value);
    }

    return searchWithIn(this._root, data);
  }

  find(data) {
    function searchWithData(node, value) {
      if (!node) return null;

      if (node.data === value) {
        return node;
      }
      return value < node.data ? searchWithData(node.left, value) : searchWithData(node.right, value);
    }

    return searchWithData(this._root, data);
  }

  remove(data) {
    this._root = removeNodeList(this._root, data);

    function removeNodeList(nome, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNodeList(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNodeList(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let mitFromR = node.right;
        while (mitFromR.left) {
          mitFromR = mitFromR.left;
        }

        node.data = mitFromR.data;

        node.right = removeNodeLis(node.right, mitFromR.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) return
    let current = this._root;
    while(current.left) {
      current = current.left;
    }
    return current.left;
  }

  max() {
    if (!this._root) return;
    let current = this._root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
};
