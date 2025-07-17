# // 234. Palindrome Linked List
# // Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

def isPalindrome(head):
    if head.next is None: return True
    # find the middle element
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    #reverse the second list
    prev = None
    curr = slow
    while curr :
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    # compare the first and second list
    fl = head
    sl = prev
    while(sl):
        if fl.val != sl.val : return False
        fl = fl.next
        sl = sl.next
    return True