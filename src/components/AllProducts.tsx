import type { IProduct } from "@/types/product.type";
import ProductCard from "@/components/ProductCArd";

interface AllProductsProps {
  products: IProduct[];
}

const AllProducts = ({ products }: AllProductsProps) => {
  return (
    <div className="container mx-auto my-10">
      {" "}
      <h1 className="text-3xl font-bold">THE LIBRARY</h1>{" "}
      <p className="mt-2">Twelve lifts covering every major muscle group.</p>
      {!Array.isArray(products) || products.length === 0 ? (
        <p className="mt-6 text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
