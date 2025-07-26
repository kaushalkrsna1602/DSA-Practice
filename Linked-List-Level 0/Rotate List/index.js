// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head
    let length = 0;
    let curr = head
    while(curr) {
        curr = curr.next;
        length++
    }

    k = k % length
    let f = head
    let s = head
    for (let i = 0; i < k; i++) {
        f = f.next
    }

    while(f.next) {
        f = f.next
        s = s.next
    }

    f.next = head;
    let newHead = s.next
    s.next = null
    return newHead
};