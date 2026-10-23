"use client";

import React from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import toast from "react-hot-toast";
import type { IProduct } from "@/types/product.type";

const DetailPageButton = ({
  product,
  variant = "detail",
}: {
  product: IProduct;
  variant?: "detail" | "plan" | "saved";
}) => {
  const { planlist, savedlist, setPlanlist, setSavedlist } =
    useProductContext();

  const isPlanFull = planlist.length >= 5;
  const alreadyInPlan = planlist.some(
    (item) => String(item.id) === String(product.id),
  );
  const alreadyInSaved = savedlist.some(
    (item) => String(item.id) === String(product.id),
  );

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.error("Already in plan");
      return;
    }

    if (isPlanFull) {
      toast.error("Plan full");
      return;
    }

    setPlanlist((prev) => [...prev, product]);
    toast.success("Added to plan");
  };

  const handleSavedForLater = () => {
    if (alreadyInSaved) {
      toast.error("Already in saved list");
      return;
    }

    setSavedlist((prev) => [...prev, product]);
    toast.success("Added to saved list");
  };

  const removeFromPlan = () => {
    setPlanlist((prev) =>
      prev.filter((item) => String(item.id) !== String(product.id)),
    );
  };

  const handleMarkAsDone = () => {
    removeFromPlan();
    toast.success("Workout completed");
  };

  const handleRemove = () => {
    if (variant === "plan") {
      removeFromPlan();
      toast.success("Removed from plan");
    } else if (variant === "saved") {
      setSavedlist((prev) =>
        prev.filter((item) => String(item.id) !== String(product.id)),
      );
      toast.success("Removed from saved list");
    }
  };

  if (variant === "detail") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleAddToPlan}
          disabled={alreadyInPlan}
          className="btn rounded-full border-none bg-[#c6ff00] px-6 font-semibold text-black hover:bg-[#d4ff33]"
        >
          {alreadyInPlan ? "In Plan" : "Add to Plan"}
        </button>

        <button
          type="button"
          onClick={handleSavedForLater}
          disabled={alreadyInSaved}
          className="btn btn-outline rounded-full px-6"
        >
          {alreadyInSaved ? "Saved" : "Save for Later"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href={`/products/${product.id}`}
        className="btn btn-outline btn-sm rounded-full px-4"
      >
        View Details
      </Link>

      {variant === "plan" && (
        <button
          type="button"
          onClick={handleMarkAsDone}
          className="btn btn-sm rounded-full border-none bg-[#c6ff00] px-4 font-semibold text-black hover:bg-[#d4ff33]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Mark as Done
        </button>
      )}

      <button
        type="button"
        onClick={handleRemove}
        aria-label={
          variant === "plan" ? "Remove from plan" : "Remove from saved list"
        }
        className="btn btn-ghost btn-sm btn-circle text-base-content/60"
      >
        ✕
      </button>
    </div>
  );
};

export default DetailPageButton;
