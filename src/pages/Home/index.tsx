import React, {ReactNode} from "react"
import Timeline from "../../components/Timeline"
import {Trans, useTranslation} from "react-i18next"

interface ImageCareer {
    src: string
    alt: string
    className?: string
}

interface DescriptionCareer {
    text: string | ReactNode
    images: ImageCareer[]
}

export interface CareerProps {
    date: string
    title: string
    description: DescriptionCareer
    techList?: string[]
}

export const careerFolder = `${process.env.PUBLIC_URL}/img/career`

const Home: React.FC = () => {
    const {t} = useTranslation("career")

    const career: CareerProps[] = [
        {
            date: t("career.0.date"),
            title: t("career.0.title"),
            description: {
                text: <Trans i18nKey={"career:career.0.description"}
                    components={{
                        italic: <i/>,
                        bold: <strong/>,
                        newline: <hr className="my-5"/>
                    }}
                />,
                images: [
                    {
                        src: "ISEP.jpg",
                        alt: "Logo ISEP",
                        className: "w-32 mb-2"
                    },
                    {
                        src: "nokia.jpg",
                        alt: "Logo Nokia",
                        className: "w-32"
                    }
                ]
            },
            techList: ["c/c++", "Java", "Spring", "html / css / js / php / mysql", "React", "aws", "git", "bash", "Typescript"]
        },
        {
            date: t("career.1.date"),
            title: t("career.1.title"),
            description: {
                text: <Trans i18nKey={"career:career.1.description"}
                    components={{bold: <strong/>, newline: <br/>}}/>,
                images: [
                    {
                        src: "ines.png",
                        alt: "Logo InEs",
                        className: "w-56 my-2"
                    },
                    {
                        src: "sensor_case.jpg",
                        alt: "Sensor Case",
                        className: "w-56"
                    }
                ]
            },
            techList: ["c/c++", "électronique", "LoRa", "Capteur à Ultrasons"]
        },
        {
            date: t("career.2.date"),
            title: t("career.2.title"),
            description: {
                text: <Trans i18nKey={"career:career.2.description"}
                    components={{newline: <br/>}}/>,
                images: [
                    {
                        src: "iut-angers.jpg",
                        alt: "Logo IUT Angers",
                        className: "w-48"
                    }
                ]
            },
            techList: ["html", "css", "js", "c/c++", "php", "mysql", "java"]
        },
        {
            date: t("career.3.date"),
            title: t("career.3.title"),
            description: {
                text: <Trans i18nKey={"career:career.3.description"}
                    components={{newline: <br/>}}/>,
                images: [
                    {
                        src: "tennis.jpg",
                        alt: "Tennis Club TCA"
                    }
                ]
            }
        },
        {
            date: t("career.4.date"),
            title: t("career.4.title"),
            description: {
                text: t("career.4.description"),
                images: [
                    {
                        src: "chevrollier.jpg",
                        alt: "Lycee Chevrollier",
                        className: "w-32 h-32"
                    }
                ]
            }
        }
    ]

    return (
        <div className="inline-flex dark:bg-gray-800 dark:text-white">
            <div className="pl-96 h-full w-full pt-10">
                <p className="p-5 text-4xl uppercase text-gray-600 dark:text-gray-300">Portfolio</p>
                <ul className="list-none px-10 relative">
                    <div
                        className="absolute border-r-2 border-gray-400 border-dotted z-0 mt-7"
                        style={{marginLeft: "6.44rem", height: "calc(100% - 1.75rem)"}}/>
                    {
                        career.map((job, i) => (
                            <div key={i}>
                                <Timeline date={job.date} title={job.title}
                                    description={job.description} techList={job.techList}/>
                                <div className="border border-gray-300 w-4/5 mx-auto my-2"/>
                            </div>

                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Home