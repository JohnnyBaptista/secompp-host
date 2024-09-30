declare module "cart/CartsContext" {
  type ProductType = {
    title: string;
    description: string;
    id: number;
    price: number;
    quantity: number;
  };

  type CartContextType = {
    cart: ProductType[];
    cartTotal: number;
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: number) => void;
  };

  const CartContext: React.Context<CartContextType>;

  const CartProvider: React.FC<{ children: React.ReactNode }>;

  const useCart: () => CartContextType;
}

declare module "products/Products" {
  const Products: React.FC<{ products: ProductType[] }>;

  export default Products;
}

declare module "cart/Cart" {
  const Cart: React.FC;

  export default Cart;
}
