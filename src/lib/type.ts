
export interface FoodItem {
  id: number;
  food_name: string;
  description: string;
  cooking_time?: string;
  img_url: string;
  new_price: number;
  old_price?: number;
  vegeterian:boolean;
}
export interface CartItem {
  food_id:string;
  food_name:string;
  price:number;
  img_url:string;
  quantity: number;
}

export interface Order {
  order_id: string;
  user_id: string;
  sub_total: number;
  delivery_fee: number;
  total_price: number;
  payment: boolean; 
  payment_method: string;
  delivery_location: string;
  order_status: string;
};
