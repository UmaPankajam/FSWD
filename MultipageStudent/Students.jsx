function Students() {
  const students = [
    { id: 1, name: "Alice", course: "Math" },
    { id: 2, name: "Bob", course: "Science" },
    { id: 3, name: "Charlie", course: "History" },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} – {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;

