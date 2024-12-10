export interface OrderItem {
  good_id: number;
  name: string;
  price: string;
  img: string;
  status: string;
  quantity: string;
  // state: "processed" | "posted" | "cancelled";
}

export interface Order {
  order_id: number;
  created_at: string;
  goods: OrderItem;
}
