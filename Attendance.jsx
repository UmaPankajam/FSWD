import Attendance from "./FSWD/ReactJS/Attendance";

function App() 
{
  return(<Attendance/>);
}

export default App
//Attendance.jsx

import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Subhasri", status: null },
  { id: 2, name: "Swathi R", status: null },
  { id: 3, name: "Tharani", status: null },
  { id: 4, name: "Swathi K", status: null },
   { id: 5, name: "Swathika", status: null }
];

export default function Attendance() {
  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (id, status) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;

  return (
    <div style={styles.container}>
      <h2>Attendance Tracker</h2>

      <div style={styles.summary}>
        <span>Present: {presentCount}</span>
        <span>Absent: {absentCount}</span>
        <span>Total: {students.length}</span>
      </div>

      <ul style={styles.list}>
        {students.map((student) => (
          <li key={student.id} style={styles.row}>
            <span>{student.name}</span>

            <div>
              <button
                onClick={() => markAttendance(student.id, "Present")}
                style={{
                  ...styles.btn,
                  background:
                    student.status === "Present" ? "#28a745" : "#e0e0e0",
                  color: student.status === "Present" ? "#fff" : "#000",
                }}
              >
                Present
              </button>

              <button
                onClick={() => markAttendance(student.id, "Absent")}
                style={{
                  ...styles.btn,
                  background:
                    student.status === "Absent" ? "#dc3545" : "#e0e0e0",
                  color: student.status === "Absent" ? "#fff" : "#000",
                }}
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  btn: {
    marginLeft: "6px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
