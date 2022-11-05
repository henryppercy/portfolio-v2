import './App.scss';
import Home from './componants/Home';
import About from './componants/About';
import Work from './componants/Work';
import Contact from './componants/Contact';

import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>  );
}

export default App;
