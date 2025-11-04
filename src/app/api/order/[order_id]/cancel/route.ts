import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ order_id: string }> }
) {
  const { order_id } = await context.params;
  const { status } = await request.json();

  const { data, error } = await supabase
    .from("orders")
    .update({ order_status: status })
    .eq("order_id", order_id)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "Order cancelled",
    data,
  });
}
