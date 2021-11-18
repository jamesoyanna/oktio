import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import User from './Pages/user/User';
import Dashboard from './Pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
