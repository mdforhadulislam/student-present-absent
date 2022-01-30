import React, { useState } from "react";

export default function AddStudent({ studentList, setStudentList }) {
  const [studentName, setStudentName] = useState("");

  const submitHendeler = (e) => {
    e.preventDefault();
    const newObj = {
      id: Math.floor(Math.random() * Date.now()),
      name: studentName,
    };
    if (studentName && studentName !== " ") {
      setStudentList([newObj, ...studentList]);
      setStudentName("");
    } else {
      alert("Enter Student Name");
    }
  };
  const inputHendeler = (e) => {
    setStudentName(e.target.value);
  };

  return (
    <div className="add__student__form__box">
      <form>
        <input
          type="text"
          placeholder="Enter Student Name.."
          onChange={inputHendeler}
          value={studentName}
        />
        <button type="submit" onClick={submitHendeler}>
          Add Student
        </button>
      </form>
    </div>
  );
}
