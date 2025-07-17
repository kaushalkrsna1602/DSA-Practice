// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


var isPalindrome = function(head) {
    // find the middle element
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half
    let prev = null;
    let curr = slow;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    // compare elements

    let fL = head;
    let sL = prev;
    while(sL) {
        if(fL.val != sL.val) return false;
        fL = fL.next
        sL = sL.next;
    }
    return true
};