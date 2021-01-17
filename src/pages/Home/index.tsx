import React from "react"
import SideBar from "../../components/SideBar"
import LanguageSelector from "../../components/LanguageSelector"

const Home: React.FC = () => (
        <div>
            <LanguageSelector className="absolute top-0 right-0"/>
            <SideBar/>
            <div className="absolute top-0 ml-96">Home</div>
        </div>
    )

export default Home