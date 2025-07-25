# 61. Rotate List
# Given the head of a linked list, rotate the list to the right by k places.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0: return head

        length = 0
        curr = head
        while curr:
            curr = curr.next
            length += 1
        
        s = head
        f = head
        k = k % length
        for i in range(k):
            f = f.next
        
        while f.next:
            s = s.next
            f = f.next
        f.next = head
        newHead = s.next
        s.next = None
        return newHead
        

class Solution(object):
    def rotateRight(self, head, k):
        if not head or not head.next or k == 0:
            return head

        length = 1
        tail = head
        while tail.next:
            tail = tail.next
            length += 1

        k = k % length
        if k == 0:
            return head

        steps = length - k
        prev = None
        curr = head
        for _ in range(steps):
            prev = curr
            curr = curr.next

        prev.next = None
        tail.next = head
        return curr
    