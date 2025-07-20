# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sentinel = ListNode(0, head)
        length = 0
        while head:
            head = head.next
            length += 1
        curr = sentinel
        for i in range(length - n):
            curr = curr.next
        curr.next = curr.next.next
        return sentinel.next

