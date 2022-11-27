import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import ReactGA from 'react-ga4'
import usePageTracking from './hooks/usePageTracking'

const measurementID = process.env.REACT_APP_ANALYTICS_ID
ReactGA.initialize(measurementID)
ReactGA.send('pageview')

function App() {
  usePageTracking()
  console.log('version: 1.1.3')
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  )
}

export default App
