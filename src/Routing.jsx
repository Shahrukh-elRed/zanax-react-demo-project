import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCompany from "./Pages/AboutCompany/AboutCompany";
import Terms from "./Pages/Terms/Terms";
import Dashboard from "./Pages/Dashboard/Dashboard"

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="about" element={<AboutCompany />} />
                <Route path="terms" element={<Terms />} />
            </Routes>
        </Router >
    )
}

export default Routing;