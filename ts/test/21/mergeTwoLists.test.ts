import { expect } from "chai";
import { ListNode, mergeTwoLists } from "../../src/21/mergeTwoLists";

describe("mergeTwoLists", () => {
  it("should work 1", () => {
    // 1
    const list1 = new ListNode(1);
    // 2
    const list2 = new ListNode(2);
    // 1, 2
    const expectList = new ListNode(1, new ListNode(2));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
  //
  it("should work 2", () => {
    // 1, 2
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);
    // 3
    const list2 = new ListNode(3);
    // 1, 2, 3
    const expectList = new ListNode(1, new ListNode(2, new ListNode(3)));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
  //
  it("should work 1,3 2", () => {
    // 1, 2
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    // 3
    const list2 = new ListNode(2);
    // 1, 2, 3
    const expectList = new ListNode(1, new ListNode(2, new ListNode(3)));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
  //
  it("should work 1,3 2,3", () => {
    // 1, 2
    const list1 = new ListNode(1);
    list1.next = new ListNode(3);
    // 3
    const list2 = new ListNode(2);
    list2.next = new ListNode(3)
    // 1, 2, 3
    const expectList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
  //
  it("should work 3", () => {
    // 1
    const list1 = null;
    // 2
    const list2 = null;
    //
    expect(mergeTwoLists(list1, list2)).equals(null);
  });
  //
  it("should work 4", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const expectList = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
  //
  it("should work [-9,3,5,7]", () => {
    const list1 = new ListNode(-9, new ListNode(3));
    const list2 = new ListNode(5, new ListNode(7));
    const expectList = new ListNode(-9, new ListNode(3, new ListNode(5, new ListNode(7))));
    //
    expect(mergeTwoLists(list1, list2)).deep.equals(expectList);
  });
});
