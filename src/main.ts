import './style.css'

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
type SessionType = 'Course' | 'TP' | 'Language'

type Session = {
  day: Day
  time: string
  subject: string
  teacher: string
  className: string
  type: SessionType
  audience?: string
}

type Schedule = {
  key: 'mine' | 'friend' | 'makara'
  tabLabel: string
  eyebrow: string
  sessions: Session[]
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

const schedules: Schedule[] = [
  {
    key: 'mine',
    tabLabel: 'Yarith',
    eyebrow: 'Semester II • Group I4B-DAS',
    sessions: [
      { day: 'Monday', time: '9h10-10h05', subject: 'Data Visualization', teacher: 'Dr. PHAUK Sokkhey', className: 'F404', type: 'Course' },
      { day: 'Monday', time: '10h10-11h05', subject: 'Data Visualization', teacher: 'Dr. PHAUK Sokkhey', className: 'F404', type: 'Course' },
      { day: 'Monday', time: '13h00-13h55', subject: 'Economic for Engineers', teacher: 'Mr. TOUCH Sopheak', className: 'F404', type: 'Course' },
      { day: 'Monday', time: '14h00-14h55', subject: 'Economic for Engineers', teacher: 'Mr. TOUCH Sopheak', className: 'F404', type: 'Course' },
      { day: 'Monday', time: '15h10-16h05', subject: 'Anglais', teacher: 'Heang Leakena', className: 'I503', type: 'Language' },
      { day: 'Monday', time: '16h10-17h05', subject: 'Anglais', teacher: 'Heang Leakena', className: 'I503', type: 'Language' },
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
    ],
  },
  {
    key: 'friend',
    tabLabel: 'Cheab',
    eyebrow: 'Semester I • Group I4A2-Meca',
    sessions: [
      { day: 'Monday', time: '8h00-8h55', subject: 'Refrig. and Air Cond. I', teacher: 'Mr. UN AMATA', className: 'J-208', type: 'TP', audience: 'Group A' },
      { day: 'Monday', time: '9h10-10h05', subject: 'Refrig. and Air Cond. I', teacher: 'Mr. UN AMATA', className: 'J-208', type: 'TP', audience: 'Group A' },
      { day: 'Monday', time: '10h10-11h05', subject: 'Refrig. and Air Cond. I', teacher: 'Mr. UN AMATA', className: 'J-208', type: 'TP', audience: 'Group A' },
      { day: 'Monday', time: '13h00-13h55', subject: 'Turbomachines', teacher: 'Mr. DARA SEYHAK', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Monday', time: '14h00-14h55', subject: 'Turbomachines', teacher: 'Mr. DARA SEYHAK', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Monday', time: '15h10-16h05', subject: 'English VI', teacher: 'N/A', className: 'N/A', type: 'Language', audience: 'Group A' },
      { day: 'Monday', time: '16h10-17h05', subject: 'English VI', teacher: 'N/A', className: 'N/A', type: 'Language', audience: 'Group A' },
      { day: 'Tuesday', time: '7h00-7h55', subject: 'Heat Exchangers', teacher: 'Dr. KINNALETH VONGCHANH', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Tuesday', time: '8h00-8h55', subject: 'Heat Exchangers', teacher: 'Dr. KINNALETH VONGCHANH', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Tuesday', time: '9h10-10h05', subject: 'Finite Elements', teacher: 'Dr. CHHITH SAOSOMETH', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Tuesday', time: '10h10-11h05', subject: 'Finite Elements', teacher: 'Dr. CHHITH SAOSOMETH', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Tuesday', time: '13h00-13h55', subject: 'Internal Combustion Engines', teacher: 'Mr. SAN SOPHAK', className: 'E-201', type: 'Course', audience: 'All' },
      { day: 'Tuesday', time: '14h00-14h55', subject: 'Internal Combustion Engines', teacher: 'Mr. SAN SOPHAK', className: 'E-201', type: 'Course', audience: 'All' },
      { day: 'Wednesday', time: '7h00-7h55', subject: 'Numerical Method', teacher: 'Mr. KEO CHIVORN', className: 'J-702', type: 'Course', audience: 'All' },
      { day: 'Wednesday', time: '8h00-8h55', subject: 'Numerical Method', teacher: 'Mr. KEO CHIVORN', className: 'J-702', type: 'Course', audience: 'All' },
      { day: 'Wednesday', time: '9h10-10h05', subject: 'Mechanical Constructions', teacher: 'Dr. SRANG SAROT', className: 'J-701', type: 'Course', audience: 'All' },
      { day: 'Wednesday', time: '10h10-11h05', subject: 'Mechanical Constructions', teacher: 'Dr. SRANG SAROT', className: 'J-701', type: 'Course', audience: 'All' },
      { day: 'Thursday', time: '7h00-7h55', subject: 'Mechanical Constructions', teacher: 'Dr. SRANG SAROT', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Thursday', time: '8h00-8h55', subject: 'Mechanical Constructions', teacher: 'Dr. SRANG SAROT', className: 'I-206', type: 'TP', audience: 'Group A' },
      { day: 'Thursday', time: '9h10-10h05', subject: 'French VIII', teacher: 'N/A', className: 'Groups 08-12', type: 'Language', audience: 'Group A' },
      { day: 'Thursday', time: '10h10-11h05', subject: 'French VIII', teacher: 'N/A', className: 'Groups 08-12', type: 'Language', audience: 'Group A' },
      { day: 'Thursday', time: '13h00-13h55', subject: 'Numerical Method', teacher: 'Mr. KEO CHIVORN', className: 'E-201', type: 'TP', audience: 'Group A' },
      { day: 'Thursday', time: '14h00-14h55', subject: 'Numerical Method', teacher: 'Mr. KEO CHIVORN', className: 'E-201', type: 'TP', audience: 'Group A' },
      { day: 'Friday', time: '7h00-7h55', subject: 'Turbomachines', teacher: 'Mr. DARA SEYHAK', className: 'E-204', type: 'Course', audience: 'All' },
      { day: 'Friday', time: '8h00-8h55', subject: 'Turbomachines', teacher: 'Mr. DARA SEYHAK', className: 'E-204', type: 'Course', audience: 'All' },
    ],
  },
  {
    key: 'makara',
    tabLabel: 'Makara',
    eyebrow: 'Semester II • Group I4B-EE-GEE',
    sessions: [
      { day: 'Monday', time: '7h00-7h55', subject: 'Energy Conversion', teacher: 'ETH Oudaya', className: 'S:II', type: 'Course' },
      { day: 'Monday', time: '8h00-8h55', subject: 'Energy Conversion', teacher: 'ETH Oudaya', className: 'S:II', type: 'Course' },
      { day: 'Monday', time: '9h10-10h05', subject: 'Power System Protection', teacher: 'VAI Vannak', className: 'S:II', type: 'Course' },
      { day: 'Monday', time: '10h10-11h05', subject: 'Power System Protection', teacher: 'VAI Vannak', className: 'S:II', type: 'Course' },
      { day: 'Monday', time: '13h00-13h55', subject: 'Anglais', teacher: 'N/A', className: 'N/A', type: 'Language' },
      { day: 'Monday', time: '14h00-14h55', subject: 'Anglais', teacher: 'N/A', className: 'N/A', type: 'Language' },
      { day: 'Monday', time: '15h10-16h05', subject: 'Electrical Design', teacher: 'NOEV Yoklin', className: 'B-316', type: 'TP', audience: 'G4' },
      { day: 'Monday', time: '16h10-17h05', subject: 'Electrical Design', teacher: 'NOEV Yoklin', className: 'B-316', type: 'TP', audience: 'G4' },
      { day: 'Tuesday', time: '7h00-7h55', subject: 'Student Project II', teacher: 'CHIM Chakrya', className: 'B-314', type: 'TP', audience: 'G4' },
      { day: 'Tuesday', time: '8h00-8h55', subject: 'Student Project II', teacher: 'CHIM Chakrya', className: 'B-314', type: 'TP', audience: 'G4' },
      { day: 'Tuesday', time: '9h10-10h05', subject: 'Student Project II', teacher: 'CHIM Chakrya', className: 'B-314', type: 'TP', audience: 'G4' },
      { day: 'Tuesday', time: '10h10-11h05', subject: 'Student Project II', teacher: 'CHIM Chakrya', className: 'B-314', type: 'TP', audience: 'G4' },
      { day: 'Tuesday', time: '15h10-16h05', subject: 'Electrical Design', teacher: 'NOEV Yoklin', className: 'B-316', type: 'TP', audience: 'G3' },
      { day: 'Tuesday', time: '16h10-17h05', subject: 'Electrical Design', teacher: 'NOEV Yoklin', className: 'B-316', type: 'TP', audience: 'G3' },
      { day: 'Wednesday', time: '7h00-7h55', subject: 'Electrical System Design', teacher: 'CHHENG Monyvathna', className: 'S:I', type: 'Course' },
      { day: 'Wednesday', time: '8h00-8h55', subject: 'Electrical System Design', teacher: 'CHHENG Monyvathna', className: 'S:I', type: 'Course' },
      { day: 'Wednesday', time: '9h10-10h05', subject: 'Energy Conversion', teacher: 'ETH Oudaya', className: 'S:I', type: 'Course' },
      { day: 'Wednesday', time: '10h10-11h05', subject: 'Energy Conversion', teacher: 'ETH Oudaya', className: 'S:I', type: 'Course' },
      { day: 'Wednesday', time: '13h00-13h55', subject: 'Energy Conversion / System Protection', teacher: 'CHIM Chakrya / Heang Sokleap', className: 'B-314 / B-316', type: 'TP', audience: 'G3 / G4' },
      { day: 'Wednesday', time: '14h00-14h55', subject: 'Energy Conversion / System Protection', teacher: 'CHIM Chakrya / Heang Sokleap', className: 'B-314 / B-316', type: 'TP', audience: 'G3 / G4' },
      { day: 'Wednesday', time: '15h10-16h05', subject: 'Energy Conversion / System Protection', teacher: 'CHIM Chakrya / Heang Sokleap', className: 'B-314 / B-316', type: 'TP', audience: 'G4 / G3' },
      { day: 'Wednesday', time: '16h10-17h05', subject: 'Energy Conversion / System Protection', teacher: 'CHIM Chakrya / Heang Sokleap', className: 'B-314 / B-316', type: 'TP', audience: 'G4 / G3' },
      { day: 'Thursday', time: '7h00-7h55', subject: 'Francais', teacher: 'N/A', className: 'N/A', type: 'Language' },
      { day: 'Thursday', time: '8h00-8h55', subject: 'Francais', teacher: 'N/A', className: 'N/A', type: 'Language' },
      { day: 'Thursday', time: '9h10-10h05', subject: 'Student Project II', teacher: 'ETH Oudaya', className: 'B-315', type: 'TP', audience: 'G6' },
      { day: 'Thursday', time: '10h10-11h05', subject: 'Student Project II', teacher: 'ETH Oudaya', className: 'B-315', type: 'TP', audience: 'G6' },
      { day: 'Thursday', time: '13h00-13h55', subject: 'Student Project II', teacher: 'OEUN Sothea', className: 'B-316', type: 'TP', audience: 'G5' },
      { day: 'Thursday', time: '14h00-14h55', subject: 'Student Project II', teacher: 'OEUN Sothea', className: 'B-316', type: 'TP', audience: 'G5' },
      { day: 'Thursday', time: '15h10-16h05', subject: 'Student Project II', teacher: 'OEUN Sothea', className: 'B-316', type: 'TP', audience: 'G5' },
      { day: 'Thursday', time: '16h10-17h05', subject: 'Student Project II', teacher: 'OEUN Sothea', className: 'B-316', type: 'TP', audience: 'G5' },
      { day: 'Friday', time: '8h00-8h55', subject: 'Electrical System Design', teacher: 'CHHENG Monyvathna', className: 'I303', type: 'TP', audience: 'TD' },
      { day: 'Friday', time: '9h10-10h05', subject: 'Power System Protection', teacher: 'VAI Vannak', className: 'S:I', type: 'Course' },
      { day: 'Friday', time: '10h10-11h05', subject: 'Power System Protection', teacher: 'VAI Vannak', className: 'S:I', type: 'Course' },
      { day: 'Friday', time: '13h00-13h55', subject: 'Student Project II', teacher: 'YOU Lyhour', className: 'B-315', type: 'TP', audience: 'G6' },
      { day: 'Friday', time: '14h00-14h55', subject: 'Student Project II', teacher: 'YOU Lyhour', className: 'B-315', type: 'TP', audience: 'G6' },
    ],
  },
]

const typeClass: Record<SessionType, string> = {
  Course: 'type-course',
  TP: 'type-tp',
  Language: 'type-language',
}

function renderTableRows(sessions: Session[]): string {
  return slots
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
              <small>${session.type} • ${session.className}${session.audience ? ` • ${session.audience}` : ''}</small>
            </td>
          `
        })
        .join('')

      return `<tr><th class="time-cell">${time}</th>${dayCells}</tr>`
    })
    .join('')
}

function renderSchedule(schedule: Schedule): string {
  const tabButtons = schedules
    .map(
      (s) =>
        `<button class="tab-btn${s.key === schedule.key ? ' active' : ''}" data-schedule="${s.key}" type="button">${s.tabLabel}</button>`,
    )
    .join('')

  return `
    <main class="board">
      <header class="board-header">
        <div>
          <p class="eyebrow">${schedule.eyebrow}</p>
          <h1>Class Schedule</h1>
        </div>
        <div class="legend">
          <span class="legend-item"><span class="legend-color type-course"></span> Course</span>
          <span class="legend-item"><span class="legend-color type-tp"></span> TP</span>
          <span class="legend-item"><span class="legend-color type-language"></span> Language</span>
        </div>
      </header>

      <section class="panel">
        <div class="panel-header">
          <div class="tabs" role="tablist" aria-label="Schedule switcher">
            ${tabButtons}
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th class="time-col">Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>${renderTableRows(schedule.sessions)}</tbody>
          </table>
        </div>
      </section>
    </main>
  `
}

const app = document.querySelector<HTMLDivElement>('#app')
let activeSchedule: Schedule = schedules[0]

function mount() {
  if (!app) return
  app.innerHTML = renderSchedule(activeSchedule)
  app.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.schedule as Schedule['key'] | undefined
      const next = schedules.find((s) => s.key === key)
      if (!next || next.key === activeSchedule.key) return
      activeSchedule = next
      mount()
    })
  })
}

mount()
