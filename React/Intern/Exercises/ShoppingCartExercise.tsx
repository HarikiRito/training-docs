import React, { useState } from 'react';

/**
 * Exercise: Shopping Cart Management
 * 
 * Task: Create a shopping cart application with product management
 * 
 * Requirements:
 * 1. Create a list of products with:
 *    - Name
 *    - Price
 *    - Initial quantity
 * 
 * 2. Implement cart functionality:
 *    - Add products to cart
 *    - Remove products from cart
 *    - Update product quantities
 * 
 * 3. Calculate total cart value
 *    - Show total price of items in cart
 *    - Apply quantity-based pricing
 * 
 * Hints:
 * - Use interfaces for Product and CartItem
 * - Manage state with useState
 * - Use reduce for total calculation
 * - Implement immutable state updates
 */

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

function ShoppingCartExercise() {
  // TODO: Create initial product list

  // TODO: Implement cart state management

  // TODO: Create function to add item to cart

  // TODO: Create function to remove item from cart

  // TODO: Create function to update cart item quantity

  // TODO: Create function to calculate total cart value

  return (
    <div>
      {/* TODO: Render product list */}
      {/* TODO: Render cart items */}
      {/* TODO: Display total cart value */}
    </div>
  );
}

export default ShoppingCartExercise; 