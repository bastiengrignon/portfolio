import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Home from "./pages/Home"


const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/about"/>
        </Switch>
    </Router>
)


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
