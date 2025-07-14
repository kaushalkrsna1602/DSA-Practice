// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseLinkedList(head){
    let prev = null
    let curr = head
    while(curr) {
        temp = curr.next;
        prev = curr
        curr = temp
    }
    head = prev
    return head
}