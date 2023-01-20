const mergeTwoLists = require("../Exercises/JSV");

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

describe('mergeTwoLists', () => {
    let list1, list2, list3, list4, list5;
    beforeEach(() => {
        list1 = new ListNode(1);
        list1.next = new ListNode(2);
        list1.next.next = new ListNode(4);

        list2 = new ListNode(1);
        list2.next = new ListNode(3);
        list2.next.next = new ListNode(4);

        list3 = new ListNode(0);

        list4 = new ListNode(1);
        list4.next = new ListNode(1);
        list4.next.next = new ListNode(2);
        list4.next.next.next = new ListNode(3);
        list4.next.next.next.next = new ListNode(4);
        list4.next.next.next.next.next = new ListNode(4);

        list5 = new ListNode();
    });

    it('should merge two lists', () => {
        expect(mergeTwoLists(list1, list2)).toEqual(list4);
    });

    it('should return an empty list if both input lists are empty', () => {
        expect(mergeTwoLists(list5, list5)).toEqual(list5);
    });

    it('should return the non-empty list if one input list is empty', () => {
        expect(mergeTwoLists(list5, list3)).toEqual(list3);
    });
});
