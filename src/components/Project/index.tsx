import React from "react"
import {ProjectsProps} from "../../constants/projects"

const Project: React.FC<ProjectsProps> = ({name, description, img}) => (
    <li className="m-10">
        <div className="uppercase text-3xl p-1">
            {name}
        </div>
        <div className="flex flex-row justify-between w-full">
            <div className="font-light text-xl w-1/2 p-4 text-justify">
                {description}
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={img} alt={img} className="rounded-xl shadow-lg border-none "/>
            </div>
        </div>
        <div className="border border-gray-300 w-full mx-auto my-4"/>
    </li>
)

export default Project