import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import rust from '../../assets/rust.png'
import quiz from '../../assets/quiz.webp'
import projectManager from '../../assets/project_manager.jpg'
import fitlift from '../../assets/fitlift.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={rust} link="https://github.com/Abdou-bnm/mini-Compiler"
            h3="Compiler"
            p="A compiler built using Rust"
            />
            <ProjectCard src={quiz} link="https://github.com/NabilKara/MCQ_APP"
            h3="Quiz App"
            p="Python MCQ App"
            />
            <ProjectCard src={projectManager} link="https://github.com/NabilKara/Project_Manager"
            h3="Project Manager"
            p="A RILT stack project manager"
            />
            <ProjectCard src={fitlift} link="https://github.com/NabilKara/GUI_Meth_Acces_Fichiers"
            h3="Files Access Methods"
            p="Used C and SDL to visualize the T¬OV with overlap files structure"
            />

        </div>
    </section>
  )
}

export default Projects
