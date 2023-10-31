import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Product {
    private int id;
    private String name;
    private double price;

    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Product ID: " + id + ", Name: " + name + ", Price: $" + price;
    }
}

class ShoppingCart {
    private List<Product> items = new ArrayList<>();

    public void addProduct(Product product) {
        items.add(product);
    }

    public void removeProduct(Product product) {
        items.remove(product);
    }

    public List<Product> getItems() {
        return items;
    }
}

public class OnlineShoppingApp {
    public static void main(String[] args) {
        Product product1 = new Product(1, "Laptop", 799.99);
        Product product2 = new Product(2, "Smartphone", 399.99);

        ShoppingCart cart = new ShoppingCart();
        cart.addProduct(product1);
        cart.addProduct(product2);

        System.out.println("Welcome to the Online Shopping App!");
        displayMenu(cart);
    }

    public static void displayMenu(ShoppingCart cart) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\nMenu:");
            System.out.println("1. View Cart");
            System.out.println("2. Add Product to Cart");
            System.out.println("3. Remove Product from Cart");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    viewCart(cart);
                    break;
                case 2:
                    addProductToCart(cart);
                    break;
                case 3:
                    removeProductFromCart(cart);
                    break;
                case 4:
                    System.out.println("Thank you for using the Online Shopping App!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 4);

        scanner.close();
    }

    public static void viewCart(ShoppingCart cart) {
        System.out.println("\nShopping Cart Contents:");
        List<Product> items = cart.getItems();
        if (items.isEmpty()) {
            System.out.println("Your cart is empty.");
        } else {
            for (Product product : items) {
                System.out.println(product);
            }
        }
    }

    public static void addProductToCart(ShoppingCart cart) {
        System.out.println("\nAvailable Products:");
        Product product3 = new Product(3, "Tablet", 199.99);
        System.out.println(product3);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the ID of the product to add to your cart: ");
        int productId = scanner.nextInt();

        if (productId == product3.getId()) {
            cart.addProduct(product3);
            System.out.println("Product added to your cart.");
        } else {
            System.out.println("Invalid product ID. Product not added to your cart.");
        }
    }

    public static void removeProductFromCart(ShoppingCart cart) {
        System.out.print("\nEnter the ID of the product to remove from your cart: ");
        Scanner scanner = new Scanner(System.in);
        int productId = scanner.nextInt();
        List<Product> items = cart.getItems();

        for (Product product : items) {
            if (product.getId() == productId) {
                cart.removeProduct(product);
                System.out.println("Product removed from your cart.");
                return;
            }
        }

        System.out.println("Product not found in your cart.");
    }
}
