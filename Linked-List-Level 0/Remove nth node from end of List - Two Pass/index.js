// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    while(head) {
        head = head.next;
        length++
    }
    let prevNode = length - n;
    let curr = sentinel;

    for(let i = 0; i < prevNode; i++) {
        curr = curr.next
    }

    curr.next = curr.next.next

    return sentinel.next
};