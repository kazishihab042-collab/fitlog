export const instant = false;
import { Suspense } from "react";
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getallProducts } from "@/lib/api";
import type { IProduct } from "@/types/product.type";

export default async function Home() {
  const data = await getallProducts();
  console.log("My API Data:", data);
  const products: IProduct[] = data;

  return (
    <div>
      <Banner />

      <Suspense
        fallback={<p className="py-10 text-center">Loading products...</p>}
      >
        <AllProducts products={products} />
      </Suspense>
    </div>
  );
}
