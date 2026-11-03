import { useState } from 'react'

const specializations = [
  'Mathematics',
  'Mathematics/Computer Science',
  'Mathematics/Statistics',
  'Mathematics/Physics',
  'Computer Science',
]

const availableCourses = [
  { value: 'CS309', label: 'CS309 - System Design' },
  { value: 'CS307', label: 'CS307 - Data Bases' },
  { value: 'CS305', label: 'CS305 - Algorithms' },
]

const emptyForm = {
  gender: '',
  email: '',
  fullName: '',
  code: '',
  level: '',
  phoneNumber: '',
  dob: '',
  specialization: '',
  courses: [],
  review: 'We are in the first project in CS309 (System)... We are learning HTML and CSS in this Lab',
}

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleCourse(e) {
    const { value, checked } = e.target
    const next = checked
      ? [...form.courses, value]
      : form.courses.filter((c) => c !== value)
    setForm({ ...form, courses: next })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(form)
    setForm(emptyForm)
  }

  return (
    <>
      <form id="contactForm" onSubmit={handleSubmit}>
        <br />

        <div id="PersonalData">
          <p className="align-center">Gender:</p>

          {['Male', 'Female', 'Other'].map((g) => (
            <label key={g} htmlFor={g.toLowerCase()}>
              {g}
              <input
                type="radio"
                id={g.toLowerCase()}
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={handleChange}
              />
            </label>
          ))}

          <br /><br />
          <label htmlFor="Email" className="align-center">Enter Your Email</label>
          <input
            type="email"
            id="Email"
            name="email"
            placeholder="madakamal140@gmail.com"
            className="align-center"
            value={form.email}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="FullName" className="align-center">Enter Your Full Name:</label>
          <input
            type="text"
            id="FullName"
            name="fullName"
            placeholder="Muhammad Kamal"
            className="align-center"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="Code" className="align-center">Enter Your Code</label>
          <input
            type="number"
            id="Code"
            name="code"
            placeholder="2427090"
            className="align-center"
            value={form.code}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="Level" className="align-center">Enter Your Level</label>
          <input
            type="number"
            id="Level"
            name="level"
            placeholder="3"
            className="align-center"
            value={form.level}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="PhoneNumber" className="align-center">Enter Your Phone Number</label>
          <input
            type="number"
            id="PhoneNumber"
            name="phoneNumber"
            placeholder="01068030867"
            className="align-center"
            value={form.phoneNumber}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="DOB" className="align-center">Enter Your Date Of Birth</label>
          <input
            type="date"
            id="DOB"
            name="dob"
            className="align-center"
            value={form.dob}
            onChange={handleChange}
            required
          />

          <br /><br />
          <label htmlFor="Specialization" className="align-center">Choose Your Specialization</label>
          <br />
          <select
            className="align-center"
            id="Specialization"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            required
          >
            <option value="">Choose Your Specialization</option>
            {specializations.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <br /><br />
        <h2>Choose Course(s) From the Following:</h2>
        <div>
          {availableCourses.map((c) => (
            <div key={c.value}>
              <label>
                <input
                  type="checkbox"
                  name="courses"
                  value={c.value}
                  checked={form.courses.includes(c.value)}
                  onChange={handleCourse}
                />
                {c.label}
              </label>
            </div>
          ))}
        </div>

        <br />
        <label htmlFor="Review">Review of CS309 Project</label>
        <br />
        <textarea
          id="Review"
          name="review"
          rows="4"
          cols="50"
          value={form.review}
          onChange={handleChange}
        />

        <button type="submit" id="Submit">Submit</button>
      </form>

      {submitted && (
        <section className="align-center">
          <h2>Submitted</h2>
          <p>{submitted.fullName} ({submitted.email})</p>
          <p>Courses: {submitted.courses.join(', ') || 'none'}</p>
        </section>
      )}
    </>
  )
}

export default Contact
