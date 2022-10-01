import { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() =>{
    const target = new Date("10/13/2022 19:59:59")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <span className="Heading">ATGAL Į KATEITĮ</span>
      <span className="Clock">{days} : {hours} : {minutes} : {seconds}</span>
    </div>
  );
}

export default App;
