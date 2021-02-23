import React from "react"

const CV: React.FC = () => {
    return (
        <div className="h-full w-full mt-4">
            <div className="pl-96 h-full w-screen">
                <object width="1000" height="900"
                    data={process.env.PUBLIC_URL + "/doc/CV_Bastien_Grignon.pdf"}
                    type="application/pdf" className="mx-auto"/>
            </div>
        </div>
    )
}

export default CV