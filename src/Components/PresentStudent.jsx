import React from "react";

export default function PresentStudent({ studentPresentList }) {
  return (
    <div className="all__present__student">
      <h2 className="all__student__list__title">Present Student List</h2>
      <ul>
        {studentPresentList.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button>M</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
