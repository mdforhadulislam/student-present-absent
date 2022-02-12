import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Student from "./Components/Student";

function App() {
  const getLocalSorageData = () => {
    const getData = JSON.parse(localStorage.getItem("allStudent"));
    if (getData) {
      return getData;
    } else {
      return [];
    }
  };

  const [allStudent, setAllStudent] = useState(getLocalSorageData());
  const [studentNameAndRoll, setStudentNameAndRoll] = useState({
    name: "",
    roll: "",
    isPresent: false,
    isAbsent: false,
  });
  const [editAbleItemRoll, setEditAbleItemRoll] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("allStudent", JSON.stringify(allStudent));
    // setAllStudent(JSON.parse(localStorage.getItem("allStudent")));
  }, [allStudent]);

  return (
    <div className="App">
      {/* <div className="header">
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
      </div> */}
      <Header
        allStudent={allStudent}
        setAllStudent={setAllStudent}
        studentNameAndRoll={studentNameAndRoll}
        setStudentNameAndRoll={setStudentNameAndRoll}
        editAbleItemRoll={editAbleItemRoll}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <Student
        allStudent={allStudent}
        setAllStudent={setAllStudent}
        setStudentNameAndRoll={setStudentNameAndRoll}
        setEditAbleItemRoll={setEditAbleItemRoll}
        setIsEdit={setIsEdit}
      />
      {/* 
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
      </div> */}
    </div>
  );
}

export default App;
