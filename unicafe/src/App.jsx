import { useState } from 'react'
import './styles.css'
<link rel="stylesheet" href="unicafe.css" />


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const StatisticsLine = (props) => (
  <tr>
    <th>{props.text}</th>
    <td>{props.value}</td>
    <td className='unit'>{props.unit}</td>
  </tr>
  )


const Statistics = (props) => {
  const {good, neutral, bad} = props

  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*-1)/all
  const positive = 100*good/all

  if (all === 0) {
    return (
    <h2>No feedback gieven</h2>
    ) 
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive} unit='%' />
        </tbody> 
      </table>
    </>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => (setGood(good + 1))
  const handleNeutral = () => (setNeutral(neutral + 1))
  const handleBad = () => (setBad(bad + 1))


  return (
    <>
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral'/>
        <Button onClick={handleBad} text='bad' />
      </div>
    
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App