import React, {ReactNode} from "react"

export enum TagColor {
    blue = "blue",
    green = "green",
    yellow = "yellow",
    red = "red",
    white = "white"
}

interface TagProps {
    text: string
    color?: TagColor
    icon?: ReactNode
}

const Tag: React.FC<TagProps> = ({text, color = TagColor.blue, icon = <i className="fas fa-arrow-right"/>}) => {
    return (
        <div
            className={`text-xs inline-flex items-baseline font-bold leading-sm uppercase px-3 py-1
             bg-${color === TagColor.white ? color : `${color}-200`} 
             text-${color === TagColor.white ? "gray" : color}-700 
             ${color === TagColor.white ? "border" : ""} rounded-full`}>
            {icon}
            <div className="ml-2">{text}</div>
        </div>
    )
}

export default Tag