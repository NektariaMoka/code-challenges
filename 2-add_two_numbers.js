/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTowNumbersInList = function (l1, l2) {
  let remainder = 0;
  let root = {};
  let current = root;

  while (l1 || l2 || remainder) {
    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + remainder;
    remainder = 0;

    if (sum >= 10) {
      remainder = 1;
      sum -= 10;
    }

    current.next = new ListNode(sum);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    console.log(sum);
  }

  return root.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const node1 = new ListNode(2);
node1.next = new ListNode(4, new ListNode(3));
const node2 = new ListNode(5);
node2.next = new ListNode(6, new ListNode(4));

console.log(addTowNumbersInList(node1, node2));
