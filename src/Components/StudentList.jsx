import React from "react";

export default function StudentList({
  studentList,
  setStudentList,
  studentPresentList,
  setStudentPresentList,
  studentAbsentList,
  setStudentAbsentList,
}) {
  const presentAddListHendeler = (user) => {
    const removedFiltering = studentPresentList.filter(
      (singleUser) => singleUser.id !== user.id
    );
    setStudentPresentList([user, ...removedFiltering]);

    const newStudentList = studentList.filter(
      (singleUser) => singleUser.id !== user.id
    );
    setStudentList(newStudentList);
  };
  const absentAddListHendeler = (user) => {
    const removedFiltering = studentAbsentList.filter(
      (singleUser) => singleUser.id !== user.id
    );
    setStudentAbsentList([user, ...removedFiltering]);

    const newStudentList = studentList.filter(
      (singleUser) => singleUser.id !== user.id
    );
    setStudentList(newStudentList);
  };

  return (
    <div className="all__student__list">
      <h2 className="all__student__list__title">All Student List</h2>
      <ul>
        {studentList.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <div className="list__button">
              <button
                onClick={() => {
                  presentAddListHendeler(user);
                }}
              >
                P
              </button>
              <button
                onClick={() => {
                  absentAddListHendeler(user);
                }}
              >
                A
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
