# // 876. Middle of the Linked List

# // Given the head of a singly linked list, return the middle node of the linked list.

# // If there are two middle nodes, return the second middle node.

def middleNode (self , head):
    slow = head
    fast = head
    while fast and fast.next :
        slow = slow.next
        fast = fast.next.next
    return slow