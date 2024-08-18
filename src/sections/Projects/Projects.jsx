import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import fitLift from '../../assets/fitlift.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard 
           src={viberr} 
           link={'#'} 
           h3='Mario Game'
           p = 'Platformer Game (JS)'
           />
            <ProjectCard 
           src={freshBurger} 
           link={'#'} 
           h3='Noob Fight'
           p = 'Fighting Game (JS)'
           />
             <ProjectCard 
           src={fitLift} 
           link={'#'} 
           h3='Weather App'
           p = '(Python)'
           />
           <ProjectCard 
           src={hipsster} 
           link={'#'} 
           h3='Anime Fight Db'
           p = '(MySQL)'
           />
        </div>
    </section>
  );
};

export default Projects;
