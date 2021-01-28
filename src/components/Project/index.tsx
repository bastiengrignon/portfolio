import React from "react"

interface ProjectProps {
    name: string
    description: string
}

const Project: React.FC<ProjectProps> = ({name , description}) => (
    <li className="ml-5 mt-10">
        <div className="uppercase text-3xl">
            {name}
        </div>
        <div className="font-light text-xl">
            {description}
        </div>
        <div className="text-base">

        </div>
        <div className="border border-gray-300 w-5/6 mx-auto my-4"/>
    </li>
)

export default Project