import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCompany from "./Pages/AboutCompany/AboutCompany";
import Terms from "./Pages/Terms/Terms";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Faq from "./Pages/Faq/Faq";
import Services from "./Pages/Services/Services";
import Cards from "./Pages/Cards/Cards";
import Alerts from "./Pages/Alerts/Alerts";
import Dropdowns from "./Pages/Dropdowns/Dropdowns";
import Tabs from "./Pages/Tabs/Tabs";
import TooltipAndPopover from "./Pages/TooltipAndPopover/TooltipAndPopover";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/pages/about" element={<AboutCompany />} />
                <Route path="/pages/terms" element={<Terms />} />
                <Route path="/pages/faq" element={<Faq />} />
                <Route path="/pages/services" element={<Services />} />
                <Route path="/components/cards" element={<Cards />} />
                <Route path="/elements/alerts" element={<Alerts />} />
                <Route path="/elements/dropdowns" element={<Dropdowns />} />
                <Route path="/advanced-elements/tabs" element={<Tabs />} />
                <Route path="/advanced-elements/tooltip" element={<TooltipAndPopover />} />
            </Routes>
        </Router >
    )
}

export default Routing;