import "./App.css";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  return <div className="App"></div>;
}

export default App;
