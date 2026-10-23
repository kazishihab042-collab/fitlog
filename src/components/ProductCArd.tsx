import Image from "next/image";
import type { IProduct } from "@/types/product.type";

const ProductCArd = ({ product }: { product: IProduct }) => {
  return (
    <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-lg transition hover:shadow-xl">
      <figure className="relative h-56 w-full bg-base-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <h2 className="card-title text-xl font-bold">{product.name}</h2>

          <span className="badge badge-primary">{product.difficulty}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.muscleGroups.map((muscle) => (
            <span key={muscle} className="badge badge-outline">
              {muscle}
            </span>
          ))}
        </div>

        <p className="text-sm text-base-content/70">{product.description}</p>

        <div className="grid grid-cols-2 gap-3 rounded-lg bg-base-200 p-3">
          <div>
            <p className="text-sm text-base-content/60">Duration</p>
            <p className="font-semibold">{product.duration} min</p>
          </div>

          <div>
            <p className="text-sm text-base-content/60">Calories</p>
            <p className="font-semibold">{product.caloriesBurned} kcal</p>
          </div>

          <div>
            <p className="text-sm text-base-content/60">Sets</p>
            <p className="font-semibold">{product.sets}</p>
          </div>

          <div>
            <p className="text-sm text-base-content/60">Reps</p>
            <p className="font-semibold">{product.reps}</p>
          </div>
        </div>

        <div className="card-actions mt-3 items-center justify-between">
          <span className="font-bold">⭐ {product.rating}</span>

          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCArd;
