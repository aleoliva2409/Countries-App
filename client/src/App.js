import { useLocation } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./components/nabvar/Navbar"

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {
        location.pathname !== "/" ?
        <Navbar display="block" /> :
        <Navbar display="none"/>
      }
      <Routes />
    </div>
  );
}

export default App;
