import React from 'react'
import styles from './ProjectsStyles.module.css'
import mario from '../../assets/mario-icon.png'
import swords from '../../assets/swords-icon.png'
import sunLogo from '../../assets/sun-icon.png'
import mysqlLogo from '../../assets/mysql-logo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard 
           src={mario} 
           link={'https://tifro24.github.io/Project-Week-Game/'} 
           h3='Mario Game'
           p = 'Platformer Game (JS)'
           />
            <ProjectCard 
           src={swords} 
           link={'https://tifro24.github.io/Noob-Fight-Game/'} 
           h3='Noob Fight'
           p = 'Fighting Game (JS)'
           />
             <ProjectCard 
           src={sunLogo} 
           link={'https://github.com/Tifro24/Python-Project-Weather-App-v2/blob/main/weather_app_v2.py'} 
           h3='Weather App'
           p = '(Python)'
           />
           <ProjectCard 
           src={mysqlLogo} 
           link={'https://tifro24.github.io/Anime-Fight-Database/'} 
           h3='Anime Fight Db'
           p = '(MySQL)'
           />
        </div>
    </section>
  );
};

export default Projects;
