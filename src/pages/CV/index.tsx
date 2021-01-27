import React from "react"
import SideBar from "../../components/SideBar"

const CV: React.FC = () => {
    return (
        <div className="h-full w-max mt-4">
            <SideBar/>
            <div className="pl-96 h-full w-full mx-auto">
                <object width="1000" height="900"
                    data={process.env.PUBLIC_URL + "/doc/CV_Bastien_Grignon.pdf"}
                    type="application/pdf" className="mx-24"/>
            </div>
        </div>
    )
}

export default CV