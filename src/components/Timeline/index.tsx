import React from "react"

interface TimelineProps {
    date: string
    title: string
    description: string | React.FC
}

const randomBackgroundColors = (): string => {
    const colors: string[] = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    const opacities: number[] = [300, 400, 500, 600]
    const randomColor: string = colors[Math.floor(Math.random() * colors.length)]
    const randomOpacity: number = opacities[Math.floor(Math.random() * opacities.length)]
    return `bg-${randomColor}-${randomOpacity}`
}

const Timeline: React.FC<TimelineProps> = ({date, title, description}) => {
    return (
        <li className="inline-flex w-full py-6 pr-24 relative">
            <div
                className="absolute border-r-2 border-gray-400 border-dotted h-full z-0"
                style={{marginLeft: "6.1rem"}}/>
            <div className="inline-flex items-start">
                <div className="inline-flex items-center">
                    <div className="text-gray-500 font-light italic whitespace-nowrap">{date}</div>
                    <span className="flex items-center h-4 w-4 z-10 mx-4">
                        <span
                            className="absolute rounded-full h-4 w-4 bg-blue-600 border-2 border-gray-200"/>
                        <span
                            className="absolute rounded-full h-4 w-4 bg-blue-400 opacity-75 animate-ping"/>
                    </span>
                </div>
            </div>
            <div className={`${randomBackgroundColors()} rounded-lg shadow-2xl ml-4 relative`}>
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