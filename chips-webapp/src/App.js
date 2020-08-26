import React, { useEffect,  useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreatePost from './Components/Post/uPost';
import Home from './Components/Home';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/SignUp/Signup';
import Nav from './Components/Nav/head';
import { AuthProvider } from './Config/Auth';
import PrivateRoute from './Config/PrivateRoute';
import Error from './Components/404';
import User from './Components/Profile/profile';
import  Imp from './Components/Nav/import';
import Resource from './Components/Resources/Resource';
import ResourceView from './Components/Resources/resourceView';
function App() {
      
  
  return (

<AuthProvider>
 <Router>
   <Imp/>
   <Nav/>
    <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/createPost" component={CreatePost} />
    <PrivateRoute exact path="/Resource" component={Resource} />
    <PrivateRoute exact path="/Profile" component={User} />
    <PrivateRoute exact path="/StudentResource" component={ResourceView} />

    
    <Route render={function(){
                        return (<Error/>); 
                    }}/>
    </Switch>
</Router>
</AuthProvider>

  );
}

export default App;
