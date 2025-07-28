# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        dummy = ListNode()
        dummy.next = head
        p = dummy
        c = head
        n = head.next
        while c and n:
            p.next = n
            c.next = n.next
            n.next = c

            p = c
            c = p.next
            n = c and c.next
        return dummy.next       
        


# Recursive Approach 

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        left = head
        right = head.next
        left.next = self.swapPairs(right.next)
        right.next = left
        return right