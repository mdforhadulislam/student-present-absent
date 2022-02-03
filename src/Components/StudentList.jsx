import React from "react";

export default function StudentList({
  allStudent,
  setAllStudent,
  setStudentNameAndRoll,
  setEditAbleItemRoll,
  setIsEdit,
}) {
  const editHendeler = (item) => {
    setStudentNameAndRoll(item);
    setEditAbleItemRoll(item.roll);
    setIsEdit(true);
  };

  const deleteHendeler = (roll) => {
    const deleteItem = allStudent
      .filter((items) => items.roll !== roll)
      .map((item) => item);
    setAllStudent([...deleteItem]);
  };

  const presentHendeler = (roll) => {
    setAllStudent([
      ...allStudent
        .filter((items) => items.roll === roll)
        .map((item) => ({ ...item, isPresent: true, isAbsent: false })),
      ...allStudent.filter((items) => items.roll !== roll).map((item) => item),
    ]);
  };

  const absentHendeler = (roll) => {
    setAllStudent([
      ...allStudent
        .filter((items) => items.roll === roll)
        .map((item) => ({ ...item, isAbsent: true, isPresent: false })),
      ...allStudent.filter((items) => items.roll !== roll).map((item) => item),
    ]);
  };

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
              <div className="button__container">
                <button
                  className="edit__button"
                  onClick={() => {
                    editHendeler(item);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete__button"
                  onClick={() => {
                    deleteHendeler(item.roll);
                  }}
                >
                  Delete
                </button>
                <button
                  className="present__button"
                  onClick={() => {
                    presentHendeler(item.roll);
                  }}
                >
                  Present
                </button>
                <button
                  className="absent__button"
                  onClick={() => absentHendeler(item.roll)}
                >
                  Absent
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
