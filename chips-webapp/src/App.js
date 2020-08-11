import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreatePost from './Components/userPosts/uPost';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Nav from './Components/Nav/Navigation';
import { AuthProvider } from './Config/Auth';
import PrivateRoute from './Config/PrivateRoute';
import Error from './Components/404';
function App() {
  return (

<AuthProvider>
 <Router>
    <Nav/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/createPost" component={CreatePost} />

    
    <Route render={function(){
                        return (<Error/>); 
                    }}/>
    </Switch>
</Router>
</AuthProvider>

  );
}

export default App;
