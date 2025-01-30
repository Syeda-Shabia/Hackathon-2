"use client"; // Mark this as a Client Component"
// context/CartContext.tsx
import { createContext, useContext, useState } from 'react';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  mainImage: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const incrementQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
// "use client"; // Mark this as a Client Component

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   mainImage: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (productId: string) => void;
//   getTotalPrice: () => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>(() => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cart");
//       return savedCart ? JSON.parse(savedCart) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   },
//   [cart]);

//   const addToCart = (product: CartItem) => {
//     console.log("Adding product:", product);
//     setCart((prevCart) => {
//   const cartCopy = [...prevCart];
//   const existingProduct = cartCopy.find((item) => item._id === product._id);
//   if (existingProduct) {
//     existingProduct.quantity += 1;
//     return cartCopy;
//   }
//   return [...cartCopy, { ...product, quantity: 0  }];
// });
//   };
  

//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.price * product.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };