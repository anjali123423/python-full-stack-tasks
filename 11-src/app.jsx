
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setStudent({ name, email, course });
  }

  return (
    <div style={{
      fontFamily: "Arial",
      padding: "25px",
      maxWidth: "500px",
      margin: "auto"
    }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>Student Name</label><br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Course</label><br />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="Web Development">
              Web Development
            </option>
          </select>
        </p>

        <button type="submit">Register Student</button>
      </form>

      {student && (
        <div>
          <h2>Registration Successful!</h2>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}
