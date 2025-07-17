# // 160. Intersection of Two Linked Lists
# // Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

# // For example, the following two linked lists begin to intersect at node c1:

# // The test cases are generated such that there are no cycles anywhere in the entire linked structure.

# // Note that the linked lists must retain their original structure after the function returns.

def getIntersectionNode(headA, headB):
    store = set()
    while headB:
        store.add(headB)
        headB = headB.next
    #check for all elements of setA in store
    while headA:
        if headA in store:
            return headA
        headA = headA.next
    return None