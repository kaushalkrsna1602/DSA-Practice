# // 141. Linked List Cycle
# // Given head, the head of a linked list, determine if the linked list has a cycle in it.

# // There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

# // Return true if there is a cycle in the linked list. Otherwise, return false.

# // Approach 1 : HASH MAP 

class Solution:
    def hasCycle(self, head):
        seen = set()
        while head:
            if head in seen:
                return True
            seen.add(head)
            head = head.next
        return False
    


# Approach 2 : Floyd's Cycle Finding ALgorithm / SLOW AND FAST POINTER APPROACH

class Solution(object):
    def hasCycle(self, head):
        if not head or not head.next:
            return False
        slow = head
        fast = head.next
        while slow != fast:
            if not fast or not fast.next:
                return False
            slow = slow.next
            fast = fast.next.next
        return True