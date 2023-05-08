import React, { useEffect, useState } from 'react'
import { getProjects } from '../../firestore/projects';
import './Projects.css'

const Projects = () => {

    type Project = {
        Title: string;
        Description: string;
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
        <div>
            {projects.map(project => <div className='whole-project'><h1 className='project-title'> {project.Title}</h1> <p> {project.Description}</p></div>)}
        </div>
    )
}

export default Projects