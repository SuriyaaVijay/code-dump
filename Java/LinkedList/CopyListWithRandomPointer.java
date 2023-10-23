
public class CopyListWithRandomPointer {
    class Node {
        int val;
        Node next;
        Node random;

        public Node(int val) {
            this.val = val;
            this.next = null;
            this.random = null;
        }
    }

    public Node copyRandomList(Node head) {
        if (head == null)
            return null;
        Node ptr = head;
        while (ptr != null) {
            Node nex = ptr.next;
            Node copy = new Node(ptr.val);
            ptr.next = copy;
            copy.next = nex;
            ptr = nex;
        }
        ptr = head;
        while (ptr != null) {
            ptr.next.random = ptr.random != null ? ptr.random.next : null;
            ptr = ptr.next.next;
        }
        ptr = head;
        Node res = head.next;
        while (ptr != null && ptr.next != null) {
            Node temp = ptr.next;
            ptr.next = ptr.next.next;
            temp.next = ptr.next == null ? null : ptr.next.next;
            ptr = ptr.next;
        }
        return res;
    }
}