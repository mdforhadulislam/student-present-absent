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
  }, [allStudent]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
