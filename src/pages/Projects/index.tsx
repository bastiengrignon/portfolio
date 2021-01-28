import React from "react"
import SideBar from "../../components/SideBar"
import LanguageSelector from "../../components/LanguageSelector"
import Project from "../../components/Project"

const Projects: React.FC = () => (
    <div className="inline-flex w-full">
        <LanguageSelector className="fixed top-0 right-0 z-10"/>
        <SideBar/>
        <div className="h-full w-full pl-96">
            <ul className="list-none">
                <Project/>
            </ul>
        </div>
    </div>
)

export default Projects