import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { useTheme } from "./utils/useTheme";


import {Route, Routes} from "react-router-dom";

const App = () => {
    const theme = useTheme();
    return (
        <div className={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
      </div>
    );
}

export default App;
