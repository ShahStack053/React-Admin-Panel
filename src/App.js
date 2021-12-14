import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./Components/pages/home/Home";
import UserList from "./Components/pages/userList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./Components/pages/user/User";
import NewUser from "./Components/pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
