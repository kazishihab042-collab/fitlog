"use client";

import Image from "next/image";
import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import DetailPageButton from "@/components/DetailPageButton";

const MyPLan = () => {
  const { planlist, savedlist } = useProductContext();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "ratings">(
    "duration",
  );

  const currentlist = activeTab === "plan" ? planlist : savedlist;

  const sortedList = [...currentlist].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "ratings") return a.rating - b.rating;
    return 0;
  });

  const totalMinutes = planlist.reduce((sum, p) => sum + p.duration, 0);
  const totalCalories = planlist.reduce((sum, p) => sum + p.caloriesBurned, 0);

  const renderTabContent = () => {
    if (sortedList.length === 0) {
      return <h2 className="py-6">Nothing here</h2>;
    }

    return (
      <div className="flex flex-col gap-3">
        {sortedList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-base-300 p-4"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={64}
                  className="h-16 w-24 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="font-bold uppercase">{item.name}</h3>
                <p className="text-sm text-base-content/60">{item.equipment}</p>
                <p className="text-xs">
                  {item.duration} min · {item.caloriesBurned} kcal ·{" "}
                  {item.rating}
                </p>
              </div>
            </div>

            <DetailPageButton
              product={item}
              variant={activeTab === "plan" ? "plan" : "saved"}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 px-4">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Exercises</div>
          <div className="stat-value">{planlist.length}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Minutes</div>
          <div className="stat-value">{totalMinutes}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Calories</div>
          <div className="stat-value">{totalCalories}</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div role="tablist" className="tabs tabs-box">
          <button
            type="button"
            role="tab"
            className={`tab ${activeTab === "plan" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("plan")}
          >
            Today&apos;s Plan
          </button>
          <button
            type="button"
            role="tab"
            className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "ratings")
          }
          className="select"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="ratings">Ratings</option>
        </select>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default MyPLan;
