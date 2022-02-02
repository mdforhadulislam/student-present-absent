import { useState } from "react";
import "./App.css";
import AbsentStudent from "./Components/AbsentStudent";
import AddStudent from "./Components/AddStudent";
import PresentStudent from "./Components/PresentStudent";
import StudentList from "./Components/StudentList";

function App() {
  const [allStudent, setAllStudent] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Student Present Absent Managed Application</h1>
        <AddStudent allStudent={allStudent} setAllStudent={setAllStudent} />
      </div>
      <div className="body">
        <StudentList allStudent={allStudent} setAllStudent={setAllStudent} />
        <PresentStudent allStudent={allStudent} />
        <AbsentStudent allStudent={allStudent} />
      </div>
    </div>
  );
}

export default App;
