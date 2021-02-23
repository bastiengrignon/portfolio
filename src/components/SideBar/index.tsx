import React from "react"
import {Link, NavLink} from "react-router-dom"
import RouteUrl from "../../constants/RouteUrl"
import {useTranslation} from "react-i18next"

const activeStateCss = "border-gray-100 bg-gray-700"
const desactiveStateCss = "border-gray-800 hover:bg-gray-700 hover:border-gray-100"
const links = {
    email: "mailto:basgrignon@gmail.com",
    github: "https://github.com/bastiengrignon",
    linkedin: "https://www.linkedin.com/in/bastien-grignon",
    entrep: "https://www.lesentrep.fr"
}

const SideBar: React.FC = () => {
    const {t} = useTranslation()
    return (
        <div className="w-96 fixed top-0 bottom-0 bg-gray-800 text-white">
            <Link to={RouteUrl.root}>
                <div className="flex justify-center pt-10">
                    <img src={process.env.PUBLIC_URL + "/img/profile-picture.jpg"}
                        alt="Profile Picture" className="rounded-full w-48 h-48"/>
                </div>
                <div className="flex justify-center text-3xl uppercase mt-2">Bastien Grignon</div>
                <div className="flex justify-center italic mt-3 text-sm">{t("current_job")}</div>
            </Link>

            <nav className="mt-10 text-gray-100">
                <NavLink to={RouteUrl.root} activeClassName={activeStateCss} exact={true}
                    className={`flex items-center py-2 px-8 my-2 border-r-4 ${desactiveStateCss}`}>
                    <span className="mx-4">Portfolio</span>
                </NavLink>
                <NavLink to={RouteUrl.projects} activeClassName={activeStateCss}
                    className={`flex items-center py-2 px-8 border-r-4 ${desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.projects")}</span>
                </NavLink>
                <NavLink to={RouteUrl.cv} activeClassName={activeStateCss}
                    className={`flex items-center py-2 px-8 mt-10 border-r-4 ${desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.cv")}</span>
                </NavLink>
            </nav>

            <div className="mt-10 mx-4 text-white text-2xl">
                <span className="text-sm">{t("contact")}</span>
                <div>
                    <a href={links.email} rel={"noopener noreferrer"}>
                        <i className="fas fa-envelope mx-2 hover:text-yellow-400"/>
                    </a>
                    <a href={links.github} target={"_blank"} rel={"noopener noreferrer"}>
                        <i className="fab fa-github mx-2 hover:text-yellow-400"/>
                    </a>
                    <a href={links.linkedin} target={"_blank"} rel={"noopener noreferrer"}>
                        <i className="fab fa-linkedin mx-2 hover:text-yellow-400"/>
                    </a>
                </div>
            </div>
            <div className="bottom-0 absolute m-4">
                <a href={links.entrep} target={"_blank"} rel={"noopener noreferrer"}>
                    <img src={process.env.PUBLIC_URL + "/img/entrep.jpg"} alt="Logo Entrep"
                        className="h-24 cursor-pointer"/>
                </a>
            </div>
        </div>
    )
}

export default SideBar