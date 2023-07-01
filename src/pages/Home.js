import React from 'react'
import '../styles/home.css'
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Ashish Pawar</h2>
        <div className='prompt'>
          <p>A Frontend Developer with a Passion for Learning new things daily</p>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className='skills'>

        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>Reactjs,Redux,HTML,CSS,Flutter,Bootstrap,Tailwind CSS, ChakrUI</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript,Java,C++,Go,C</span>
          </li>
          <li></li>
        </ol>
      </div>

    </div>
  )
}

export default Home