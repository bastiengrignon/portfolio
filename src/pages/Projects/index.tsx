import React from "react"
import SideBar from "../../components/SideBar"
import LanguageSelector from "../../components/LanguageSelector"

const Projects: React.FC = () => (
    <div className="inline-flex w-full">
        <LanguageSelector className="absolute top-0 right-0"/>
        <SideBar/>
        Project page
    </div>
)

export default Projects