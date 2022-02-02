import React from "react";

export default function AbsentStudent({ allStudent }) {
  return (
    <div className="absent__student__container">
      <h2>Absent Student</h2>
      <div className="absent__student__list">
        <ul>
          {allStudent
            .filter((items) => items.isAbsent)
            .map((item) => (
              <li key={item.roll}>
                <div className="student__name__roll">
                  <div className="student__name">Name: {item.name}</div>
                  <div className="student__roll">Roll: {item.roll}</div>
                </div>
                <div className="button__container">
                  <button>Accidentally Add</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
