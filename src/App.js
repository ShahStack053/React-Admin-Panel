import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./Components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Components/pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
