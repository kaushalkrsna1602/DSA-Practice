function mergeTwoSortedList(l1, l2){
    let start = new ListNode(0);
    let curr = start;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if(!l1) {
        curr.next = l2
    }
    if(!l2) {
        curr.next = l1
    }

    return start.next
}