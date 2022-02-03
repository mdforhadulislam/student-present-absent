import React from "react";

export default function AddStudent({
  allStudent,
  setAllStudent,
  studentNameAndRoll,
  setStudentNameAndRoll,
  editAbleItemRoll,
  isEdit,
  setIsEdit,
}) {
  // "#D8E2DC",
  // "#FFE5D9",
  // "#FBFAF0",
  // "#FFE9EE",
  // "#FFDDE4",

  const nameHendeler = (value) => {
    setStudentNameAndRoll({ ...studentNameAndRoll, name: value });
  };

  const rollHendeler = (value) => {
    setStudentNameAndRoll({ ...studentNameAndRoll, roll: Number(value) });
  };

  const submitHendeler = (e) => {
    e.preventDefault();

    if (studentNameAndRoll.name !== "" && studentNameAndRoll.roll !== "") {
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

  const updateHendeler = (e) => {
    e.preventDefault();
    if (studentNameAndRoll.name !== "" && studentNameAndRoll.roll !== "") {
      setAllStudent([
        ...allStudent
          .filter((items) => items.roll === editAbleItemRoll)
          .map((item) => ({ ...item, ...studentNameAndRoll })),
        ...allStudent
          .filter((items) => items.roll !== editAbleItemRoll)
          .map((item) => ({ ...item })),
      ]);
      setIsEdit(false);
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
        <button
          type="submit"
          onClick={isEdit ? updateHendeler : submitHendeler}
        >
          {isEdit ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}
