import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import TodayPage from './pages/TodayPage'
import CalendarPage from './pages/CalendarPage'
import PlanPage from './pages/PlanPage'
import MePage from './pages/MePage'

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">DDL Killer</header>
      <main className="page">
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/me" element={<MePage />} />
        </Routes>
      </main>
      <NavBar />
    </BrowserRouter>
  )
}

export default App