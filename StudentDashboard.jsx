import React, { useState } from "react";

export default function StudentDashboard() {
  const [activePage, setActivePage] = useState("students");

  const students = [
    { id: 1, name: "Alice", grade: "A", course: "Math" },
    { id: 2, name: "Bob", grade: "B", course: "Science" },
    { id: 3, name: "Charlie", grade: "A", course: "History" },
    { id: 4, name: "Daisy", grade: "C", course: "English" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f4f6f8",
        color: "#111", // FORCE TEXT COLOR
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          background: "#1f2937",
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h2 style={{ color: "#fff" }}>School Admin</h2>

        <div
          style={{
            padding: "0.5rem",
            cursor: "pointer",
            background: activePage === "students" ? "#374151" : "transparent",
            color: "#fff",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
          onClick={() => setActivePage("students")}
        >
          Students
        </div>

        <div
          style={{
            padding: "0.5rem",
            cursor: "pointer",
            background: activePage === "dashboard" ? "#374151" : "transparent",
            color: "#fff",
            borderRadius: "4px",
          }}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ padding: "1.5rem", background: "#f4f6f8" }}>
        {activePage === "dashboard" && (
          <div
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              color: "#111",
            }}
          >
            <h1 style={{ color: "#111" }}>Dashboard Overview</h1>
            <p>Total Students: {students.length}</p>
            <p>Average Grade: A–B</p>
          </div>
        )}

        {activePage === "students" && (
          <div
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              color: "#111",
            }}
          >
            <h1 style={{ color: "#111" }}>Student List</h1>

            <table style={{ width: "100%", marginTop: "1rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", color: "#111" }}>Name</th>
                  <th style={{ textAlign: "left", color: "#111" }}>Course</th>
                  <th style={{ textAlign: "left", color: "#111" }}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td style={{ color: "#111" }}>{s.name}</td>
                    <td style={{ color: "#111" }}>{s.course}</td>
                    <td style={{ color: "#111" }}>{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
//App.jsx
import StudentDashboard from "./Fswd/Sample/StudentDashboard"

function App() {
  return <StudentDashboard/>
    
}
export default App
