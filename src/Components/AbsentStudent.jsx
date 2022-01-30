import React from "react";

export default function AbsentStudent({ studentAbsentList }) {
  return (
    <div className="all__absent__student">
      <h2 className="all__student__list__title">Absent Student List</h2>
      <ul>
        {studentAbsentList.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button>M</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
