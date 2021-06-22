import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading) {
    return (
      <section className="section loading">
        <h1>Loading....</h1>
      </section>
    )
  }

  const {company, dates, duties, title} = jobs[value]

  return <section className="section">
    <div className="title">
      <h2>Expierence</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((item,index) => {
          return (
            <button className="btn" key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
              {item.company}
            </button>
          )
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duties, index) => {
          return (
            <div key={index} className="job-desc">
              <FontAwesomeIcon icon={faAngleDoubleRight} className="job-icon" />
              <p>{duties}</p>
            </div>
          )
        })}
      </article>
    </div>
    
  </section>


  return 
}

export default App
