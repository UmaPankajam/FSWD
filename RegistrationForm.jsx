import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    bio: "",
    gender: "",
    interests: [],
    department: "",
    file: null,
    dob: "",
    phone: "",
    roll: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // checkboxes use value to represent interest (e.g., "Coding")
      setForm((prev) => {
        const set = new Set(prev.interests);
        if (checked) set.add(value);
        else set.delete(value);
        return { ...prev, interests: Array.from(set) };
      });
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    setForm((prev) => ({ ...prev, file }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const summary = `Name: ${form.name}
Email: ${form.email}
Department: ${form.department}
Gender: ${form.gender}
Interests: ${form.interests.join(", ")}
Phone: ${form.phone}`;
    alert("Registered successfully:\n\n" + summary);
  }

  function handleReset() {
    setForm({
      name: "",
      password: "",
      bio: "",
      gender: "",
      interests: [],
      department: "",
      file: null,
      dob: "",
      phone: "",
      roll: "",
      email: "",
    });
    // If you have a file input ref you can clear it too
  }

  return (
    <div className="page-root">
      <style>{`
        /* page-root centers everything */
        .page-root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3f4f6;
        }

        /* form container: semi-opaque over background image */
        .form-container {
          width: 420px;
          max-width: 95%;
          padding: 20px;
          border-radius: 12px;
          justyfy-content:center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
          background-image:
            linear-gradient(rgba(109, 105, 187, 0.88), rgba(165, 150, 216, 0.88)),
            url('/bg.jpg');
          background-size: cover;
          background-position: center;
          font-family: Arial, Helvetica, sans-serif;
        }

        .form-container h2 {
          text-align: center;
          margin: 0 0 12px 0;
          font-size: 20px;
        }

        .field { margin-bottom: 10px; }
        .field label { display:block; font-size: 13px; margin-bottom:6px; }
        input[type="text"], input[type="password"], input[type="email"], input[type="tel"], input[type="number"], select, textarea, input[type="date"] {
          width:100%;
          padding:8px;
          border:1px solid #c1c1c1;
          border-radius:6px;
          font-size:14px;
          box-sizing:border-box;
        }

        .inline-list { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
        .row { display:flex; gap:10px; }
        .row .col { flex:1; }

        .btns { display:flex; gap:10px; margin-top:12px; }
        .btn { padding:10px 12px; border-radius:6px; border:none; cursor:pointer; font-weight:600; }
        .btn.submit { background:#0b76ef; color:white; flex:1; }
        .btn.reset { background:#e5e7eb; color:#111; flex:1; }

        .file-info { font-size:13px; margin-top:6px; color:#333; }
      `}</style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Student Registration</h2>

        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required minLength={6} />
        </div>

        <div className="field">
          <label htmlFor="bio">Short bio / About</label>
          <textarea id="bio" name="bio" rows={4} value={form.bio} onChange={handleChange} placeholder="Tell us something about yourself" />
        </div>

        <div className="field">
          <label>Gender</label>
          <div className="inline-list">
            <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" checked={form.gender === "Other"} onChange={handleChange} /> Other</label>
          </div>
        </div>

        <div className="field">
          <label>Interests</label>
          <div className="inline-list">
            <label><input type="checkbox" name="interest" value="Coding" checked={form.interests.includes("Coding")} onChange={handleChange} /> Coding</label>
            <label><input type="checkbox" name="interest" value="Design" checked={form.interests.includes("Design")} onChange={handleChange} /> Design</label>
            <label><input type="checkbox" name="interest" value="Sports" checked={form.interests.includes("Sports")} onChange={handleChange} /> Sports</label>
            <label><input type="checkbox" name="interest" value="Music" checked={form.interests.includes("Music")} onChange={handleChange} /> Music</label>
          </div>
        </div>

        <div className="field row">
          <div className="col">
            <label htmlFor="department">Department (dropdown)</label>
            <select id="department" name="department" value={form.department} onChange={handleChange} required>
              <option value="">-- Select department --</option>
              <option value="CSE">Computer Science</option>
              <option value="ECE">Electronics</option>
              <option value="ME">Mechanical</option>
              <option value="CE">Civil</option>
            </select>
          </div>

          <div className="col">
            <label htmlFor="roll">Roll no (number)</label>
            <input id="roll" name="roll" type="number" value={form.roll} onChange={handleChange} min={1} />
          </div>
        </div>

        <div className="field row">
          <div className="col">
            <label htmlFor="dob">Date of birth</label>
            <input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="file">Upload profile picture / document</label>
          <input id="file" name="file" type="file" accept="image/*,.pdf" onChange={handleFileChange} />
          {form.file && <div className="file-info">Selected: {form.file.name}</div>}
        </div>

        <div className="field btns">
          <button type="submit" className="btn submit">Submit</button>
          <button type="button" className="btn reset" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}
