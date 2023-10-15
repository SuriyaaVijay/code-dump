
public class BinaryTreeTT {
    static class Node{
        int data;
        Node left;
        Node right;
        Node(int data) {
            this.data=data;
            this.left=null;
            this.right=null;
        }
    }
    static class BinaryTree{
        static int idx=-1;
        static Node buildTree(int nodes[]) {
          idx++;
          if(nodes[idx]==-1) {
            return null;
          }  
          Node newNode=new Node(nodes[idx]);
          newNode.left=buildTree(nodes);
          newNode.right=buildTree(nodes);
          return newNode;


        }
    }
    public static void preorder(Node root) {
        if(root==null) {
            return;
        }
        System.out.print(root.data+" ");
        preorder(root.left);
        preorder(root.right);
    }
    public static void main(String[] args) {
        int nodes[]={1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
        BinaryTree BT=new BinaryTree();
        Node root=BT.buildTree(nodes);
        // System.out.println(root.data);
        preorder(root);
    }
    
}
