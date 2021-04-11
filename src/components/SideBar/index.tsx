import React, {useState} from "react"
import {Link, NavLink} from "react-router-dom"
import RouteUrl from "../../constants/RouteUrl"
import {useTranslation} from "react-i18next"
import {motion} from "framer-motion"

const activeStateCss = "bg-gray-700 border-none"
const desactiveStateCss = "border-r-8 border-gray-800 hover:bg-gray-700" +
    " hover:border-gray-200 dark:border-gray-400 dark:hover:border-gray-200"
const links = {
    email: "mailto:basgrignon@gmail.com",
    github: "https://github.com/bastiengrignon",
    linkedin: "https://www.linkedin.com/in/bastien-grignon",
    entrep: "https://www.lesentrep.fr"
}

const SideBar: React.FC = () => {
    const [isMailActive, setIsMailActive] = useState<boolean>(false)
    const [isGithubActive, setIsGithubActive] = useState<boolean>(false)
    const [isLinkedinActive, setIsLinkedinActive] = useState<boolean>(false)
    const {t} = useTranslation()

    return (
        <div className="w-96 fixed top-0 bottom-0 bg-gray-800 text-white dark:bg-gray-400 dark:text-text-gray-900">
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
                    className={`flex items-center py-2 px-8 my-2 ${desactiveStateCss}`}>
                    <span className="mx-4">Portfolio</span>
                </NavLink>
                <NavLink to={RouteUrl.projects} activeClassName={activeStateCss}
                    className={`flex items-center py-2 px-8 ${desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.projects")}</span>
                </NavLink>
                <NavLink to={RouteUrl.cv} activeClassName={activeStateCss}
                    className={`flex items-center py-2 px-8 mt-10 ${desactiveStateCss}`}>
                    <span className="mx-4">{t("tab.cv")}</span>
                </NavLink>
            </nav>

            <div className="mt-10 mx-4 text-white">
                <span className="text-base">{t("contact")}</span>
                <div className="text-3xl">
                    <a href={links.email} rel={"noopener noreferrer"}>
                        <motion.div
                            onHoverStart={() => setIsMailActive(true)}
                            onHoverEnd={() => setIsMailActive(false)}
                            className="fas fa-envelope mx-2 hover:text-yellow-400 transform hover:scale-110"
                            animate={{
                                scale: isMailActive ? 1.5 : 1,
                                rotate: isMailActive ? 360 : 0
                            }}/>
                    </a>
                    <a href={links.github} target={"_blank"} rel={"noopener noreferrer"}>
                        <motion.div
                            onHoverStart={() => setIsGithubActive(true)}
                            onHoverEnd={() => setIsGithubActive(false)}
                            className="fab fa-github-square mx-2 hover:text-yellow-400 transform hover:scale-110"
                            transition={{duration: 0.3}}
                            animate={{
                                scale: isGithubActive ? 1.5 : 1,
                                rotate: isGithubActive ? 360 : 0
                            }}/>
                    </a>
                    <a href={links.linkedin} target={"_blank"} rel={"noopener noreferrer"}>
                        <motion.div
                            onHoverStart={() => setIsLinkedinActive(true)}
                            onHoverEnd={() => setIsLinkedinActive(false)}
                            className="fab fa-linkedin mx-2 hover:text-yellow-400 transform hover:scale-110"
                            transition={{duration: 0.3}}
                            animate={{
                                scale: isLinkedinActive ? 1.5 : 1,
                                rotate: isLinkedinActive ? 360 : 0
                            }}/>
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