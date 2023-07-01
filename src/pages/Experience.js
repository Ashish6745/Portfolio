import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import "../styles/experience.css"
function Experience() {
  return (
    <div className='experience'>
         <VerticalTimeline lineColor='#3e497a'>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date='2015-2016' iconStyle={{background:'#3e497a', color:'#fff'}}
                    icon={<i class="fa-solid fa-school"></i>}
                    >
                      <h3 className='vertical-timeline-element-title'>D.A.V Public School, Hapur ,  U.P.</h3>
                      <p>High School</p>
D.A.V Public School
                    </VerticalTimelineElement>
         </VerticalTimeline>
         <VerticalTimeline lineColor='#3e497a'>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date='2017-2018' iconStyle={{background:'#3e497a', color:'#fff'}}
                    icon={<i class="fa-solid fa-school"></i>}
                    >
                      <h3 className='vertical-timeline-element-title'>D.A.V Public School, Hapur ,  U.P.</h3>
                      <p>Secondary class</p>

                    </VerticalTimelineElement>
         </VerticalTimeline>
         <VerticalTimeline lineColor='#3e497a'>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2022' iconStyle={{background:'#3e497a', color:'#fff'}}
                    icon={<i class="fa-solid fa-school"></i>}
                    >
                      <h3 className='vertical-timeline-element-title'>ABESIT, Ghaziabad ,  U.P.</h3>
                      <p>Bachelor of Technlogy</p>

                    </VerticalTimelineElement>
         </VerticalTimeline>
         <VerticalTimeline lineColor='#3e497a'>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date='2023' iconStyle={{background:'#3e497a', color:'#fff'}}
                    icon={<i class="fa-solid fa-briefcase"></i>}
                    >
                      <h3 className='vertical-timeline-element-title'>S7 Works </h3>
                      <p>Frotend Developer Intern</p>

                    </VerticalTimelineElement>
         </VerticalTimeline>
    </div>
  )
}

export default Experience