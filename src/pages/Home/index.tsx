import React from "react"
import SideBar from "../../components/SideBar"
import LanguageSelector from "../../components/LanguageSelector"
import Timeline from "../../components/Timeline"
import career from "../../constants/career"

const Home: React.FC = () => (
    <div className="inline-flex w-full">
        <LanguageSelector className="fixed top-0 right-0 z-10"/>
        <SideBar/>
        <div className="pl-96 h-full w-full pt-10">
            <p className="text-4xl uppercase text-gray-600 pb-5 px-5">Portfolio</p>
            <ul className="list-none px-10 relative">
                <div
                    className="absolute border-r-2 border-gray-400 border-dotted h-full z-0 mt-7"
                    style={{marginLeft: "6.45rem"}}/>
                {
                    career.map((job, i) => (
                        <div key={i}>
                            <Timeline date={job.date} title={job.title} description={job.description} techList={job.techList} />
                            <div className="border border-gray-300 w-4/5 mx-auto my-2"/>
                        </div>

                    ))
                }
            </ul>

        </div>
    </div>
)

export default Home