import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { CartItem } from "@/lib/type";

function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const datePart = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, "")
    .slice(0, 8);
  return `${datePart}-${result}`; // example: 20251027-AB3K9Z
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const cart = data.cart;

    const orderId = generateOrderId();
    //console.log(orderId)

    // save order details
    const orderData = {
      order_id: orderId,
      user_id: data.user,
      sub_total: data.subtotal,
      delivery_fee: data.delivery,
      total_price: data.total,
      payment_method: data.payment,
      delivery_location: data.location,
      instruction: data.instruction,
    };

    const itemsToInsert = cart.map((item: CartItem) => ({
      order_id: orderId,
      food_name: item.food_name,
      quantity: item.quantity,
    }));

    const { error: orderError } = await supabase
      .from("orders")
      .insert([orderData]);

    if (orderError) throw orderError;

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(itemsToInsert);

    if (itemsError) throw itemsError;

    return NextResponse.json({});
  } catch (error) {
    console.error("Order API Error:", error);
    return NextResponse.json({}, { status: 500 });
  }
}
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  if (!userId) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
