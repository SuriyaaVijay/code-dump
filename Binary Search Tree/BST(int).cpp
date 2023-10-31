#include<bits/stdc++.h>
#include<string.h>
#include<math.h>
#include<stdlib.h>
#include<climits>
using namespace std;

class TreeNode {
public:
    int data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int value) : data(value), left(nullptr), right(nullptr) {}
};

class BST {
private:
    TreeNode* root;

    TreeNode* insert(TreeNode* node, int value) {
        if (node == nullptr)
            return new TreeNode(value);
        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
        return node;
    }

    TreeNode* findMin(TreeNode* node) {
        while (node->left != nullptr)
            node = node->left;
        return node;
    }

    TreeNode* remove(TreeNode* node, int value) {
        if (node == nullptr)
            return node;
        if (value < node->data)
            node->left = remove(node->left, value);
        else if (value > node->data)
            node->right = remove(node->right, value);
        else {
            if (node->left == nullptr) {
                TreeNode* temp = node->right;
                delete node;
                return temp;
            } else if (node->right == nullptr) {
                TreeNode* temp = node->left;
                delete node;
                return temp;
            }
            TreeNode* temp = findMin(node->right);
            node->data = temp->data;
            node->right = remove(node->right, temp->data);
        }
        return node;
    }

    void inorderTraversal(TreeNode* node) {
        if (node == nullptr)
            return;
        inorderTraversal(node->left);
        cout << node->data << " ";
        inorderTraversal(node->right);
    }

public:
    BST() : root(nullptr) {}

    void insert(int value) {
        root = insert(root, value);
    }

    void remove(int value) {
        root = remove(root, value);
    }

    bool search(int value) {
        TreeNode* current = root;
        while (current != nullptr) {
            if (value == current->data)
                return true;
            else if (value < current->data)
                current = current->left;
            else
                current = current->right;
        }
        return false;
    }

    void displayInorder() {
        inorderTraversal(root);
        cout << std::endl;
    }
};

int main() {
    BST bst;
    int choice, value;

    while (true) {
        cout << "Binary Search Tree Operations:" << std::endl;
        cout << "1. Insert" << std::endl;
        cout << "2. Delete" << std::endl;
        cout << "3. Search" << std::endl;
        cout << "4. Display Inorder" << std::endl;
        cout << "5. Exit" << std::endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value to insert: ";
                cin >> value;
                bst.insert(value);
                break;
            case 2:
                cout << "Enter value to delete: ";
                cin >> value;
                bst.remove(value);
                break;
            case 3:
                cout << "Enter value to search: ";
                cin >> value;
                if (bst.search(value))
                    cout << "Value found in the tree." << std::endl;
                else
                    cout << "Value not found in the tree." << std::endl;
                break;
            case 4:
                cout << "Inorder Traversal: ";
                bst.displayInorder();
                break;
            case 5:
                return 0;
            default:
                cout << "Invalid choice. Please try again." << std::endl;
        }
    }

    return 0;
}
