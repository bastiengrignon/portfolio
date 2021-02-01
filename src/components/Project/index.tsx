import React from "react"
import {ProjectsProps} from "../../constants/projects"
import Tag from "../Tag"
import {useTranslation} from "react-i18next"

const Project: React.FC<ProjectsProps> = ({name, description, img, tagList}) => {
    const {t} = useTranslation()
    return (
        <li className="m-10 h-full">
            <div className="uppercase text-3xl p-1">
                {name}
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col justify-between text-xl w-1/2 p-4">
                    <div className="text-justify">{description}</div>
                    {
                        tagList && <div className="font-semibold text-left">
                            {t("study_tech")}
                            {
                                tagList.map((value, i) => (
                                    <Tag key={i} text={value}/>
                                ))
                            }
                        </div>
                    }
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={img} alt={img} className="rounded-xl shadow-lg border-none "/>
                </div>
            </div>
            <div className="border border-gray-300 w-full mx-auto my-4"/>
        </li>
    )
}

export default Project