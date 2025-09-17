
import React,{useState} from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? (
        <h2>Welcome! You are logged in 🎉</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
