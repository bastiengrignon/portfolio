import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import CV from "./pages/CV"
import "@fortawesome/fontawesome-free/css/all.min.css"
import RouteUrl from "./constants/RouteUrl"
import "./i18n"
import SideBar from "./components/SideBar"
import LanguageSelector from "./components/LanguageSelector"
import ToggleSwitch from "./components/Switch"

const darkModeKey = "darkMode"

const App: React.FC = () => {

    const setDarkMode = (checked: boolean) => {
        localStorage.setItem(darkModeKey, String(checked))
        window.location.reload()
    }

    const getDarkMode = (): boolean => {
        return localStorage.getItem(darkModeKey) === "true"
    }

    return (
        <div className={getDarkMode() ? "dark" : ""}>
            <Router>
                <div className="fixed top-0 right-0 z-10 inline-flex items-center">
                    <ToggleSwitch checked={getDarkMode()} onChange={setDarkMode}/>
                    <LanguageSelector/>
                </div>
                <SideBar/>
                <Switch>
                    <Route path={RouteUrl.projects} component={Projects}/>
                    <Route path={RouteUrl.cv} component={CV}/>
                    <Route path={RouteUrl.root} component={Home}/>
                </Switch>
            </Router>
        </div>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)
