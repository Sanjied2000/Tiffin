import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

type FoodRouteContext = {
  params: {
    category: string;
  };
};

export async function GET(request: string, { params }: FoodRouteContext) {
  const { category } = await params;

  const { data, error } =
    category == "All"
      ? await supabase.from("fooditems").select("*")
      : await supabase.from("fooditems").select("*").eq("category", category);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
