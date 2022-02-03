import React from "react";

export default function AbsentStudent({ allStudent, setAllStudent }) {
  const accidentallyAddHendeler = (roll) => {
    setAllStudent([
      ...allStudent
        .filter((items) => items.roll === roll)
        .map((item) => ({ ...item, isPresent: true, isAbsent: false })),
      ...allStudent.filter((items) => items.roll !== roll).map((item) => item),
    ]);
  };

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
                  <button onClick={() => accidentallyAddHendeler(item.roll)}>
                    Accidentally Add
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
