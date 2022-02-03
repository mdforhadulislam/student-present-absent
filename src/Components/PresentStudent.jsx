import React from "react";

export default function PresentStudent({ allStudent, setAllStudent }) {
  const accidentallyAddHendeler = (roll) => {
    setAllStudent([
      ...allStudent
        .filter((items) => items.roll === roll)
        .map((item) => ({ ...item, isPresent: false, isAbsent: true })),
      ...allStudent.filter((items) => items.roll !== roll).map((item) => item),
    ]);
  };

  return (
    <div className="present__student__container">
      <h2>Present Student </h2>
      <div className="present__student__list">
        <ul>
          {allStudent
            .filter((items) => items.isPresent)
            .map((item) => (
              <li key={item.roll}>
                <div className="student__name__roll">
                  <div className="student__name">Name: {item.name}</div>
                  <div className="student__roll">Roll: {item.roll}</div>
                </div>
                <div className="button__container">
                  <button
                    onClick={() => {
                      accidentallyAddHendeler(item.roll);
                    }}
                  >
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
