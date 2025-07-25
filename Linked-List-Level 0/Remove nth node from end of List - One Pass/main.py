# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sentinel = ListNode(0, head)
        second = sentinel
        for _ in range(n):
            second = second.next
        first = sentinel
        while(second.next) :
            first = first.next
            second = second.next
        first.next = first.next.next
        return sentinel.next
        