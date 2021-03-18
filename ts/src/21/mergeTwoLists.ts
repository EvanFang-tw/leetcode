export class ListNode {
  public val: number;
  public next: ListNode | null;
  public constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  //
  let ptr1 = l1;
  let ptr2 = l2;
  let head: ListNode = new ListNode();
  let currentPtr = head;
  let val = 0;
  //
  while (ptr1 !== null) {
    if (ptr2 === null || ptr1.val < ptr2.val) {
      val = ptr1.val
      ptr1 = ptr1.next;
    } else {
      val = ptr2.val
      ptr2 = ptr2.next;
    }
    const newNode = new ListNode(val);
    currentPtr.next = newNode;
    currentPtr = newNode;
  }
  //
  while (ptr2 !== null) {
    const newNode = new ListNode(ptr2.val);
    currentPtr.next = newNode;
    currentPtr = newNode;
    ptr2 = ptr2.next;
  }
  //
  return head.next;
}
