import { getProductCards } from "@/lib/products";

// The admin API only allows the live domain, so the navbar search reads products through here
export const revalidate = 60;

export async function GET() {
  return Response.json(await getProductCards());
}
