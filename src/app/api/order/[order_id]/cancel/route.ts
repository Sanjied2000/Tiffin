import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PATCH(
  req: Request,
  { params }: { params: { order_id: string } }
) {
  const { order_id } = await params;
  const { status } = await req.json();

  const { data, error } = await supabase
    .from("orders")
    .update({ order_status: status })
    .eq("order_id", order_id)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Order cancelled", data });
}
