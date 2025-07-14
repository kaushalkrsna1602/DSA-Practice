# // 206. Reverse Linked List

# // Given the head of a singly linked list, reverse the list, and return the reversed list.

def reverseLinkedList(head):
    prev = None
    curr = head
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    head = prev
    return head