import React from "react"
import SideBar from "../../components/SideBar"

const Home: React.FC = () => {
    return (
        <div>
            <SideBar/>
            <div className="absolute top-0 ml-96">Home</div>
        </div>
    )
}

export default Home