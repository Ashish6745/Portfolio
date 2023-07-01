import React from 'react'
import {useParams} from 'react-router-dom'
import { projectList } from '../data/ProjectList';
function ProjectDisplay() {
  const {id} = useParams();
  const project = projectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt='/'/>
      <p><b>Skills</b>: {project.skills}</p>
      <i className="fa-brands fa-github"></i>
     
    </div>
  )
}

export default ProjectDisplay