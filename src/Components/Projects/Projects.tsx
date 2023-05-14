import React, { useEffect, useState } from 'react'
import { getProjects } from '../../firestore/projects';
import './Projects.css'

const Projects = () => {

    type Project = {
        Title: string;
        Description: string;
        img: string;
        URL: string;
    }
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjectsFromFireStore = async () => {
            const projs = await getProjects();
            setProjects(projs);
        }

        getProjectsFromFireStore()
    }, [])

    return (
        <div className='projects-container'>
            {projects.map(project => <a href={project.URL} target='_blank' rel="noreferrer" ><div className='whole-project'><h1 className='project-title'> {project.Title}</h1><img className='project-image' alt={project.Title} src={project.img} />  <p> {project.Description}</p> </div></a>)}
        </div>
    )
}

export default Projects