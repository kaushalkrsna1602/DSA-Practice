// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let p = dummy;
    let c = head;
    let n = head.next;

    while(c && n) {
        p.next = n
        c.next = n.next
        n.next = c;

        p = c
        c = p.next
        n = c && c.next
    }
    return dummy.next
};