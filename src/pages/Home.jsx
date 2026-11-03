const students = [
  { id: 1, name: 'Muhammad Kamal', code: 2427090, specialization: 'Math / Computer Science', level: '3rd', rowId: 'tbodygray' },
  { id: 1, name: 'Muhammad Kamal', code: 2427090, specialization: 'Math / Computer Science', level: '3rd', rowId: 'tbodyblue' },
]

const courses = [
  { id: 'cs309', title: 'CS309 (System)' },
  { id: 'cs307', title: 'CS307 (Data Bases)' },
  { id: 'cs305', title: 'CS305 (Algorithm)' },
]

function Home() {
  return (
    <main>
      <h1>Just Testing</h1>
      <p>Initial Project to HTML in CS309</p>
      <p id="p1">
        This Exact Words will be <strong>Bold</strong> and <em>Italic</em>... and the background of this entire paragraph will be Red Colored
      </p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Specialization</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.rowId} id={s.rowId}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.code}</td>
              <td>{s.specialization}</td>
              <td>{s.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      <h2>Courses In This Term:</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id} id={c.id}>{c.title}</li>
        ))}
      </ul>

      <br />
      <p>
        <strong>We are in the first project in CS309 (System)... We are learning HTML and CSS in this Lab</strong>
      </p>
    </main>
  )
}

export default Home
