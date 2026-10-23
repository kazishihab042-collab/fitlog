export const instant = false;

import React from "react";
import { getSingleProduct } from "@/lib/api";
import Image from "next/image";
import DetailPageButton from "@/components/DetailPageButton";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <main className="container mx-auto px-4 py-10">
      {" "}
      <div className="grid gap-10 md:grid-cols-2">
        {" "}
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-base-200 md:min-h-[450px]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name || "Workout"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center">
              No Image Available{" "}
            </div>
          )}{" "}
        </div>
        <div className="flex flex-col justify-center">
          <span className="badge badge-primary mb-4">
            {product.category || "Workout"}
          </span>

          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 leading-7 text-base-content/70">
            {product.description || "Improve your fitness with this workout."}
          </p>

          <div className="mb-8 space-y-3">
            {product.duration && (
              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {product.duration}
              </p>
            )}

            {product.difficulty && (
              <p>
                <span className="font-semibold">Difficulty:</span>{" "}
                {product.difficulty}
              </p>
            )}

            {product.equipment && (
              <p>
                <span className="font-semibold">Equipment:</span>{" "}
                {product.equipment}
              </p>
            )}
          </div>

          <DetailPageButton product={product} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
