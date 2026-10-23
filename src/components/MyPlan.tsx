import React from "react";

const MyPLan = () => {
  return (
    <div className="container mx-auto flex flex-col gap-2">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
        />

        <select defaultValue="Pick a color" className="select ms-auto">
          <option disabled>Pick a color</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>
    </div>
  );
};

export default MyPLan;
