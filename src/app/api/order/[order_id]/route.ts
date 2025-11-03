import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";


export async function GET(req:Request, context:{params:Promise<{order_id:string}>}) {
  const { order_id } = await context.params;
  const { data, error } = await supabase
    .from("order_items")
    .select(`*,fooditems("new_price")`)
    .eq("order_id", order_id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}