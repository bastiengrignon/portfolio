import React from "react"
import Tag from "../Tag"
import {useTranslation} from "react-i18next"
import {careerFolder, CareerProps} from "../../pages/Home"
import Ping from "../Ping"

const Timeline: React.FC<CareerProps> = ({date, title, description, techList}) => {
    const {t} = useTranslation()
    return (
        <li className="inline-flex w-full py-6 pr-24">
            <div className="inline-flex items-start">
                <div className="inline-flex items-start justify-between w-32">
                    <div className="text-gray-500 font-light italic flex-wrap w-20">{date}</div>
                    <Ping/>
                </div>
            </div>
            <div>
                <div className="flex items-start pt-1 pl-5 text-3xl">
                    {title}
                </div>
                <div className="ml-12 pb-4 pr-4">
                    <div className="inline-flex items-center text-justify justify-between mr-10 w-full">
                        <div className="w-3/4">
                            {description.text}
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            {
                                description.images.map((image, index) => (
                                    <img key={index} src={`${careerFolder}/${image.src}`} alt={image.alt} className={`ml-5 ${image.className}`}/>
                                ))
                            }
                        </div>
                    </div>
                    {
                        techList && <div className="font-semibold mt-4 text-left">
                            {t("study_tech")}
                            {
                                techList.map((value, i) => (
                                    <Tag key={i} text={value}/>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </li>
    )
}

export default Timeline