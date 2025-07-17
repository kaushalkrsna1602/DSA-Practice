// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

var getIntersectionNode = function(headA, headB) {
    // add all elements of headB into a set

    let set = new Set()
    while(headB) {
        set.add(headB)
        headB = headB.next
    }

    // check all element of headA in set

    while(headA) {
        if(set.has(headA)) {
            return headA
        }
        headA = headA.next
    }
    return null
};