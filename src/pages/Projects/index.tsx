import React from "react"
import Project from "../../components/Project"
import projects from "../../constants/projects"

const Projects: React.FC = () => (
    <div className="inline-flex w-full dark:bg-gray-800 dark:text-white">
        <div className="h-full w-full pl-96">
            <p className="m-10 text-2xl font-medium">
                Vous pouvez retrouver tous les projets personnels et publics auquel j&apos;ai pu
                participer sur mon <a href="https://github.com/bastiengrignon"
                    rel="noreferrer noopener" target="_blank"
                    className="underline text-pink-600 hover:text-pink-800">GitHub</a>
                <br/>
                Ainsi que mes projets réalisés lors de mon cursus à l&apos;ISEP avec différentes
                personnes regroupés sur <a href="https://github.com/ISEP-dev"
                    rel="noreferrer noopener" target="_blank"
                    className="underline text-pink-600 hover:text-pink-800">
                ce GitHub
                </a>

            </p>
            <ul className="list-none">
                {
                    projects.map((project, i) => (
                        <Project key={i} name={project.name} description={project.description}
                            img={project.img} tagList={project.tagList}/>
                    ))
                }
            </ul>
        </div>
    </div>
)

export default Projects