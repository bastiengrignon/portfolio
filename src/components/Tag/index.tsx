import React, {ReactNode} from "react"

export enum TagColor {
    blue = "blue",
    green = "green",
    yellow = "yellow",
    red = "red",
}


interface TagProps {
    text: string
    color?: TagColor
    icon?: ReactNode
    className?: string
}

const Tag: React.FC<TagProps> = ({
    text,
    color = TagColor.blue,
    icon = <i className="fas fa-arrow-right"/>,
    className = ""
}) => {

    const convertBgColorToTailwindColor = (color: TagColor): string => {
        switch (color) {
            case TagColor.blue:
                return "bg-blue-200"
            case TagColor.green:
                return "bg-green-200"
            case TagColor.yellow:
                return "bg-yellow-200"
            case TagColor.red:
                return "bg-red-200"
            default:
                console.error("Color not found")
                return ""
        }
    }

    const convertTextColorToTailwindColor = (color: TagColor): string => {
        switch (color) {
            case TagColor.blue:
                return "text-blue-200"
            case TagColor.green:
                return "text-green-200"
            case TagColor.yellow:
                return "text-yellow-200"
            case TagColor.red:
                return "text-red-200"
            default:
                console.error("Color not found")
                return ""
        }
    }

    return (
        <div
            className={`text-xs inline-flex items-baseline font-bold leading-sm uppercase px-3 py-1 mx-1
             ${convertBgColorToTailwindColor(color)} ${convertTextColorToTailwindColor(color)} rounded-full ${className}`}>
            {icon}
            <div className="ml-2">{text}</div>
        </div>
    )
}

export default Tag