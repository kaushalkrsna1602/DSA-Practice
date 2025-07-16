// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Approach 1 : HASH MAP 

var hasCycle = function(head) {
    let set = new Set();
    let curr = head;
    while(curr) {
        if (set.has(curr)) {
            return true
        } else {
            set.add(curr)
            curr = curr.next
        }
    }
    return false
};

// Approach 2 : Floyd's Cycle Finding ALgorithm / SLOW AND FAST POINTER APPROACH

var hasCycle = function(head) {
    if(!head) return false;
    let slow = head;
    let fast = head.next;

    while(slow != fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next
    }
    return true
};