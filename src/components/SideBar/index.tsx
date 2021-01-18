import React from "react"
import {Link, useHistory} from "react-router-dom"
import RouteUrl from "../../constants/RouteUrl"
import {useTranslation} from "react-i18next"

const activeStateCss = "border-gray-100 bg-gray-700"
const desactiveStateCss = "border-gray-800 hover:bg-gray-700 hover:border-gray-100"
const links = {
    email: "mailto:basgrignon@gmail.com",
    github: "https://github.com/bastiengrignon",
    linkedin: "https://www.linkedin.com/in/bastien-grignon"
}

const SideBar: React.FC = () => {
    const {t} = useTranslation()
    const history = useHistory()
    return (
        <div className="w-96 fixed top-0 bottom-0 bg-gray-800 text-white">
            <Link to={RouteUrl.root}>
                <div className="flex justify-center pt-10">
                    <img src={process.env.PUBLIC_URL + "/img/profile-picture.jpg"} alt="Profile Picture" className="rounded-full w-48 h-48"/>
                </div>
                <div className="flex justify-center text-3xl uppercase mt-2">Bastien Grignon</div>
                <div className="flex justify-center italic mt-3 text-sm">{t("current_job")}</div>
            </Link>

            <nav className="mt-10 text-gray-100">
                <Link to={RouteUrl.root}
                      className={`flex items-center py-2 px-8 my-2 border-r-4 ${history.location.pathname === RouteUrl.root ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">Portfolio</span>
                </Link>
                <Link to={RouteUrl.projects}
                      className={`flex items-center py-2 px-8 border-r-4 ${history.location.pathname === RouteUrl.projects ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.projects")}</span>
                </Link>
                <Link to={RouteUrl.cv}
                      className={`flex items-center py-2 px-8 mt-10 border-r-4 ${history.location.pathname === RouteUrl.cv ? activeStateCss : desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.cv")}</span>
                </Link>
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
        </div>
    )
}

export default SideBar