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


const App: React.FC = () => (
    <Router>
        <LanguageSelector className="fixed top-0 right-0 z-10"/>
        <SideBar/>
        <Switch>
            <Route path={RouteUrl.projects} component={Projects}/>
            <Route path={RouteUrl.cv} component={CV}/>
            <Route path={RouteUrl.root} component={Home}/>
        </Switch>
    </Router>
)


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
