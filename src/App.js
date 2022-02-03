import { useState } from "react";
import "./App.css";
import AbsentStudent from "./Components/AbsentStudent";
import AddStudent from "./Components/AddStudent";
import PresentStudent from "./Components/PresentStudent";
import StudentList from "./Components/StudentList";

function App() {
  const [allStudent, setAllStudent] = useState([]);
  const [studentNameAndRoll, setStudentNameAndRoll] = useState({
    name: "",
    roll: "",
    isPresent: false,
    isAbsent: false,
  });
  const [editAbleItemRoll, setEditAbleItemRoll] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
