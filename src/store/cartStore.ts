import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";


// For Using this...
// import { useCartStore } from "@/store/cartStore";
// const {
//   cart,
//   addToCart,
//   removeFromCart,
//   clearCart,
//   increaseQuantity,
//   decreaseQuantity,
// } = useCartStore();

type CartItem = {
  food_id: string;
  food_name: string;
  price: number;
  quantity: number;
  img_url: string;
};

type CartState = {
  cart: CartItem[];
  addToCart: (
    food_id: string,
    food_name: string,
    price: number,
    img_url: string
  ) => void;
  removeFromCart: (food_id: string) => void;
  clearCart: () => void;
  increaseQuantity: (food_id: string) => void;
  decreaseQuantity: (food_id: string) => void;
 
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (food_id, food_name, price, img_url) =>
        set((state) => {
          const existing = state.cart.find((i) => i.food_id === food_id);
          if (existing) {
            toast.warning("Item Already Exists in Cart!");
            return state;
          }
          toast.success("Item Added to Cart!");
          return {
            cart: [
              ...state.cart,
              { food_id, food_name, price, img_url, quantity: 1 },
            ],
          };
        }),

      removeFromCart: (food_id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.food_id !== food_id),
        })),

      clearCart: () => {
        set({ cart: [] });
        const storageKey = "cart-storage";
        localStorage.removeItem(storageKey);
      },

      increaseQuantity: (food_id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.food_id === food_id
              ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
              : item
          ),
        })),

      decreaseQuantity: (food_id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.food_id === food_id
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          ),
        })),
     
    }),
    { name: "cart-storage" }
  )
);
