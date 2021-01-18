import React from "react"
import SideBar from "../../components/SideBar"
import LanguageSelector from "../../components/LanguageSelector"
import Timeline from "../../components/Timeline"
import career from "../../constants/career"

const Home: React.FC = () => (
    <div className="inline-flex w-full">
        <LanguageSelector className="fixed top-0 right-0"/>
        <SideBar/>
        <div className="pl-96 h-full w-full pt-10">
            <p className="text-4xl uppercase text-gray-600 pb-5 px-5">Portfolio</p>
            <ul className="list-none px-6">
                {
                    career.map((job, i) => (
                        <Timeline key={i} date={job.date} title={job.title} description={job.description} />
                    ))
                }
            </ul>

        </div>
    </div>
)

export default Home