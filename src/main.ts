import './style.css'

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

type Session = {
  day: Day
  time: string
  subject: string
  teacher: string
  className: string
  type: 'Course' | 'TP' | 'Language'
}

const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const slots = [
  '7h00-7h55',
  '8h00-8h55',
  '9h10-10h05',
  '10h10-11h05',
  '13h00-13h55',
  '14h00-14h55',
  '15h10-16h05',
  '16h10-17h05',
]

const sessions: Session[] = [
  { day: 'Monday', time: '9h10-10h05', subject: 'Data Visualization', teacher: 'Dr. PHAUK Sokkhey', className: 'F404', type: 'Course' },
  { day: 'Monday', time: '10h10-11h05', subject: 'Data Visualization', teacher: 'Dr. PHAUK Sokkhey', className: 'F404', type: 'Course' },
  { day: 'Monday', time: '13h00-13h55', subject: 'Economic for Engineers', teacher: 'Mr. TOUCH Sopheak', className: 'F404', type: 'Course' },
  { day: 'Monday', time: '14h00-14h55', subject: 'Economic for Engineers', teacher: 'Mr. TOUCH Sopheak', className: 'F404', type: 'Course' },
  { day: 'Monday', time: '15h10-16h05', subject: 'Anglais', teacher: 'N/A', className: 'I503', type: 'Language' },
  { day: 'Monday', time: '16h10-17h05', subject: 'Anglais', teacher: 'N/A', className: 'I503', type: 'Language' },
  { day: 'Tuesday', time: '7h00-7h55', subject: 'Database Design and Admin', teacher: 'Mr. NGIN Kmlong', className: 'F404', type: 'Course' },
  { day: 'Tuesday', time: '8h00-8h55', subject: 'Database Design and Admin', teacher: 'Mr. NGIN Kmlong', className: 'F404', type: 'Course' },
  { day: 'Tuesday', time: '9h10-10h05', subject: 'Data Engineering', teacher: 'Mr. NGIN Kmlong', className: 'F404', type: 'Course' },
  { day: 'Tuesday', time: '10h10-11h05', subject: 'Data Engineering', teacher: 'Mr. NGIN Kmlong', className: 'F404', type: 'Course' },
  { day: 'Tuesday', time: '13h00-13h55', subject: 'Data Visualization', teacher: 'Mr. TOUCH Sopheak', className: 'F206', type: 'TP' },
  { day: 'Tuesday', time: '14h00-14h55', subject: 'Data Visualization', teacher: 'Mr. TOUCH Sopheak', className: 'F206', type: 'TP' },
  { day: 'Wednesday', time: '7h00-7h55', subject: 'Introduction to Parallel and Distributed Systems', teacher: 'Mr. KHEM Thay', className: 'F404', type: 'Course' },
  { day: 'Wednesday', time: '8h00-8h55', subject: 'Introduction to Parallel and Distributed Systems', teacher: 'Mr. KHEM Thay', className: 'F404', type: 'Course' },
  { day: 'Wednesday', time: '9h10-10h05', subject: 'Probabilistic Graphical Models', teacher: 'Mr. PHOK Ponna', className: 'F404', type: 'Course' },
  { day: 'Wednesday', time: '10h10-11h05', subject: 'Probabilistic Graphical Models', teacher: 'Mr. PHOK Ponna', className: 'F404', type: 'Course' },
  { day: 'Thursday', time: '7h00-7h55', subject: 'Introduction to Parallel and Distributed Systems', teacher: 'Mr. LONG Pakrigna', className: 'F206', type: 'TP' },
  { day: 'Thursday', time: '8h00-8h55', subject: 'Introduction to Parallel and Distributed Systems', teacher: 'Mr. LONG Pakrigna', className: 'F206', type: 'TP' },
  { day: 'Thursday', time: '9h10-10h05', subject: 'Francais', teacher: 'N/A', className: 'N/A', type: 'Language' },
  { day: 'Thursday', time: '10h10-11h05', subject: 'Francais', teacher: 'N/A', className: 'N/A', type: 'Language' },
  { day: 'Thursday', time: '13h00-13h55', subject: 'Data Engineering', teacher: 'Mr. KHEAN Vesal', className: 'F210', type: 'TP' },
  { day: 'Thursday', time: '14h00-14h55', subject: 'Data Engineering', teacher: 'Mr. KHEAN Vesal', className: 'F210', type: 'TP' },
  { day: 'Friday', time: '7h00-7h55', subject: 'Database Design and Admin', teacher: 'Mr. PHALLY Rathavan', className: 'F306', type: 'TP' },
  { day: 'Friday', time: '8h00-8h55', subject: 'Database Design and Admin', teacher: 'Mr. PHALLY Rathavan', className: 'F306', type: 'TP' },
  { day: 'Friday', time: '9h10-10h05', subject: 'Probabilistic Graphical Models', teacher: 'Dr. KHON Vanny', className: 'F306', type: 'TP' },
  { day: 'Friday', time: '10h10-11h05', subject: 'Probabilistic Graphical Models', teacher: 'Dr. KHON Vanny', className: 'F306', type: 'TP' },
]

const typeClass: Record<Session['type'], string> = {
  Course: 'type-course',
  TP: 'type-tp',
  Language: 'type-language',
}

const scheduleCells = slots
  .map((time) => {
    const dayCells = days
      .map((day) => {
        const session = sessions.find((s) => s.day === day && s.time === time)
        if (!session) {
          return '<td class="empty">-</td>'
        }
        return `
          <td class="${typeClass[session.type]}">
            <strong>${session.subject}</strong>
            <span>${session.teacher}</span>
            <small>${session.className} • ${session.type}</small>
          </td>
        `
      })
      .join('')

    return `<tr><th>${time}</th>${dayCells}</tr>`
  })
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="board">
    <header>
      <p class="eyebrow">Semester II • Group I4B-DAS</p>
      <h1>Class Schedule</h1>
      <p class="sub">Extracted from your timetable image (2025-2026).</p>
    </header>

    <section class="panel">
      <h2>Weekly Grid</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>${scheduleCells}</tbody>
        </table>
      </div>
    </section>
  </main>
`
