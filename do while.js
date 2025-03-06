def shopping_cart():
    # Initialize an empty cart
    cart = []
    item_prices = {'apple': 1.00, 'banana': 0.50, 'orange': 0.75}
    
    while True:  # Simulating do...while loop for menu display
        # Display the shopping menu
        print("\nWelcome to the Simple Shopping Cart!")
        print("Available items:")
        for item, price in item_prices.items():
            print(f"{item.capitalize()} - ${price:.2f}")

        print("\nOptions:")
        print("1. Add item to cart")
        print("2. Remove item from cart")
        print("3. View cart")
        print("4. Checkout")
        print("5. Exit")

        # Nested while loop for valid menu choice
        valid_choice = False
        while not valid_choice:
            choice = input("Please enter your choice (1-5): ")
            if choice in ["1", "2", "3", "4", "5"]:
                valid_choice = True
            else:
                print("Invalid choice. Please enter a number between 1 and 5.")

        if choice == "1":  # Add item to cart
            item_to_add = input("Enter the item you want to add: ").lower()
            if item_to_add in item_prices:
                cart.append(item_to_add)
                print(f"{item_to_add.capitalize()} has been added to your cart.")
            else:
                print("Sorry, that item is not available.")

        elif choice == "2":  # Remove item from cart
            if not cart:
                print("Your cart is empty. Nothing to remove.")
            else:
                item_to_remove = input("Enter the item you want to remove: ").lower()
                if item_to_remove in cart:
                    cart.remove(item_to_remove)
                    print(f"{item_to_remove.capitalize()} has been removed from your cart.")
                else:
                    print("That item is not in your cart.")

        elif choice == "3":  # View cart
            if not cart:
                print("Your cart is empty.")
            else:
                print("Items in your cart:")
                for item in cart:
                    print(f"- {item.capitalize()}")

        elif choice == "4":  # Checkout
            if not cart:
                print("Your cart is empty. Cannot checkout.")
            else:
                total = sum(item_prices[item] for item in cart)
                print(f"Your total is: ${total:.2f}")
                print("Thank you for your purchase!")
                cart.clear()  # Clear the cart after checkout

        elif choice == "5":  # Exit the application
            print("Thank you for shopping! Goodbye!")
            break  # Exit the main loop

# Run the shopping cart application
shopping_cart()