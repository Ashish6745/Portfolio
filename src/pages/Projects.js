import React from 'react'
import ProjectItem from '../components/ProjectItem'

import {projectList} from '../data/ProjectList'
function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>

       {
        projectList.map((data,idx)=> (
           <ProjectItem id={idx} image={data.image} name={data.name} />
        ))
       }
      </div>
    </div>
  )
}

export default Projects