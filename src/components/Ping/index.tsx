import React from "react"

const Ping: React.FC = () => (
    <span className="h-4 w-4 z-10 mx-4">
        <span
            className="absolute rounded-full h-4 w-4 bg-blue-600 border-2 border-gray-200"/>
        <span
            className="absolute rounded-full h-4 w-4 bg-blue-400 opacity-75 animate-ping"/>
    </span>
)

export default Ping