

public class RotateList {
    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null || k == 0) return head;
        ListNode ptr = head;
        int count = 1 ;
        while(ptr.next != null)
        {
            ptr = ptr.next;
            count++;
        }
        k = k%count;
        if(k==0) return head;
        ptr.next = head;
        for(int i=0 ; i<count-k ; i++)
        {
            ptr = ptr.next;
        }
        ListNode prev = ptr;
        ptr = ptr.next;
        prev.next = null;
        return ptr;
    }
}
