import React from "react";
import AddStudent from "./AddStudent";

export default function Header({
  allStudent,
  setAllStudent,
  studentNameAndRoll,
  setStudentNameAndRoll,
  editAbleItemRoll,
  isEdit,
  setIsEdit,
}) {
  return (
    <div className="header">
      <h1 className="title">Student Present Absent Managed Application</h1>
      <AddStudent
        allStudent={allStudent}
        setAllStudent={setAllStudent}
        studentNameAndRoll={studentNameAndRoll}
        setStudentNameAndRoll={setStudentNameAndRoll}
        editAbleItemRoll={editAbleItemRoll}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}
