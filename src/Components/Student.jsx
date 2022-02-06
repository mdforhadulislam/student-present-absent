import React from "react";
import AbsentStudent from "./AbsentStudent";
import PresentStudent from "./PresentStudent";
import StudentList from "./StudentList";

export default function Student({
  allStudent,
  setAllStudent,
  setStudentNameAndRoll,
  setEditAbleItemRoll,
  setIsEdit,
}) {
  return (
    <div className="body">
      <StudentList
        allStudent={allStudent}
        setAllStudent={setAllStudent}
        setStudentNameAndRoll={setStudentNameAndRoll}
        setEditAbleItemRoll={setEditAbleItemRoll}
        setIsEdit={setIsEdit}
      />
      <PresentStudent allStudent={allStudent} setAllStudent={setAllStudent} />
      <AbsentStudent allStudent={allStudent} setAllStudent={setAllStudent} />
    </div>
  );
}
