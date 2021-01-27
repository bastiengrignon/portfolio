import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import "@fortawesome/fontawesome-free/css/all.min.css"
import RouteUrl from "./constants/RouteUrl"
import "./i18n"
import CV from "./pages/CV"


const App: React.FC = () => (
    <Router>
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
