import React, { useState } from "react";

export default function AddStudent({ allStudent, setAllStudent }) {
  const [studentNameAndRoll, setStudentNameAndRoll] = useState({
    name: "",
    roll: "",
    isPresent: false,
    isAbsent: false,
    color: "",
  });

  const nameHendeler = (value) => {
    setStudentNameAndRoll({ ...studentNameAndRoll, name: value });
  };

  const rollHendeler = (value) => {
    setStudentNameAndRoll({ ...studentNameAndRoll, roll: value });
  };

  const submitHendeler = (e) => {
    e.preventDefault();

    if (studentNameAndRoll.name && studentNameAndRoll.roll) {
      const isTrue = allStudent.filter(
        (items) => Number(items.roll) === Number(studentNameAndRoll.roll)
      );

      isTrue.length > 0
        ? alert(" Roll " + studentNameAndRoll.roll + " Alrady Used")
        : setStudentNameAndRoll({
            ...studentNameAndRoll,
            roll: studentNameAndRoll.roll,
          });
      isTrue.length > 0
        ? setAllStudent([...allStudent])
        : setAllStudent([studentNameAndRoll, ...allStudent]);

      setStudentNameAndRoll({
        name: "",
        roll: "",
        isPresent: false,
        isAbsent: false,
      });
    } else {
      alert("Enter Student Name And Roll");
    }
  };

  return (
    <div className="add__student__form">
      <form action="">
        <input
          onChange={(event) => {
            nameHendeler(event.target.value);
          }}
          value={studentNameAndRoll.name}
          type="text"
          placeholder="Enter Student Name"
        />
        <input
          onChange={(event) => {
            rollHendeler(event.target.value);
          }}
          type="number"
          placeholder="Enter Student Roll"
          value={studentNameAndRoll.roll}
        />
        <button type="submit" onClick={submitHendeler}>
          Add Student
        </button>
      </form>
    </div>
  );
}
