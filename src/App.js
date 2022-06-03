import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import SearchPage from "./pages/Search/index"
import Home from "./pages/Home"
import NotPage from "./components/NotPage"
function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path={'*'} element={<NotPage />} />
        </Routes>
    </>
  );
}

export default App;
