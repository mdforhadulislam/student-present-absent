import { useState } from "react";
import "./App.css";
import AbsentStudent from "./Components/AbsentStudent";
import AddStudent from "./Components/AddStudent";
import PresentStudent from "./Components/PresentStudent";
import StudentList from "./Components/StudentList";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [studentPresentList, setStudentPresentList] = useState([]);
  const [studentAbsentList, setStudentAbsentList] = useState([]);

  return (
    <div className="App">
      <AddStudent setStudentList={setStudentList} studentList={studentList} />
      <div className="box__container">
        <StudentList
          studentList={studentList}
          setStudentList={setStudentList}
          studentPresentList={studentPresentList}
          setStudentPresentList={setStudentPresentList}
          studentAbsentList={studentAbsentList}
          setStudentAbsentList={setStudentAbsentList}
        />
        <PresentStudent studentPresentList={studentPresentList} />
        <AbsentStudent studentAbsentList={studentAbsentList} />
        <div className="word__mening">
          P-Present <br />
          A-Absent <br />
          M-Mistackly Add
        </div>
      </div>
    </div>
  );
}

export default App;
