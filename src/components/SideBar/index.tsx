import React from "react"
import {Link, useHistory} from "react-router-dom"
import profilePicture from "../../../src/profile-picture.jpg"
import RouteUrl from "../../constants/RouteUrl"

const activeStateCss: string = "border-gray-100 bg-gray-700"
const desactiveStateCss: string = "border-gray-800 hover:bg-gray-700 hover:border-gray-100"

const SideBar: React.FC = () => {
    const history = useHistory()
    return (
        <div className="w-1/5 h-screen bg-gray-800 text-white">
            <div className="flex justify-center pt-10">
                <img src={profilePicture} alt="Profile Picture" className="rounded-full w-48 h-48"/>
            </div>
            <div className="flex justify-center text-3xl uppercase mt-2">Bastien Grignon</div>
            <div className="flex justify-center italic mt-3 text-sm">Alternant
                ingénieur logiciel 5G chez Nokia
            </div>

            <nav className="mt-10 text-gray-100">
                <Link to={RouteUrl.root}
                      className={`flex items-center py-2 px-8 my-2 border-r-4 ${history.location.pathname === RouteUrl.root ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">Portfolio</span>
                </Link>
                <Link to={RouteUrl.projects}
                      className={`flex items-center py-2 px-8 border-r-4 ${history.location.pathname === RouteUrl.projects ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">Mes projets</span>
                </Link>
                <Link to={RouteUrl.cv}
                      className={`flex items-center py-2 px-8 mt-10 border-r-4 ${history.location.pathname === RouteUrl.cv ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">Mon CV</span>
                </Link>
            </nav>

            <div className="mt-10 mx-4 text-white text-2xl">
                <span className="text-sm">Contact</span>
                <div>
                    <a href="mailto:basgrignon@gmail.com" rel={"noopener noreferrer"}>
                        <i className="fas fa-envelope mx-2"/>
                    </a>
                    <a href="https://github.com/bastiengrignon" target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <i className="fab fa-github mx-2"/>
                    </a>
                    <a href="https://www.linkedin.com/in/bastien-grignon" target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <i className="fab fa-linkedin mx-2"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar