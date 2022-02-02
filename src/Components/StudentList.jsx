import React from "react";

export default function StudentList({ allStudent }) {
  return (
    <div className="student__list__container">
      <h2>All Student</h2>
      <div className="student__list">
        <ul>
          {allStudent.map((item) => (
            <li key={item.roll}>
              <div className="student__name__roll">
                <div className="student__name">Name: {item.name}</div>
                <div className="student__roll">Roll: {item.roll}</div>
              </div>
              {console.log(item)}
              <div className="button__container">
                <button className="edit__button">Edit</button>
                <button className="delete__button">Delete</button>
                <button className="present__button">Present</button>
                <button className="absent__button">Absent</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
