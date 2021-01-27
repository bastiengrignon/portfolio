import React from "react"
import {CareerProps} from "../../constants/career"

const Timeline: React.FC<CareerProps> = ({date, title, description}) => {
    return (
        <li className="inline-flex w-full py-6 pr-24">
            <div className="inline-flex items-start">
                <div className="inline-flex items-center justify-between w-32">
                    <div className="text-gray-500 font-light italic whitespace-nowrap">{date}</div>
                    <span className="flex items-center h-4 w-4 z-10 mx-4">
                        <span
                            className="absolute rounded-full h-4 w-4 bg-blue-600 border-2 border-gray-200"/>
                        <span
                            className="absolute rounded-full h-4 w-4 bg-blue-400 opacity-75 animate-ping"/>
                    </span>
                </div>
            </div>
            <div>
                <div className="flex items-start pt-1 pl-5 text-3xl">
                    {title}
                </div>
                <div className="ml-12 pb-4 pr-4">
                    {description}
                </div>
            </div>
        </li>
    )
}

export default Timeline