import React, { useEffect,  useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreatePost from './Components/Form/postForm';
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
import PostDetail from './Components/Post/postDetail';
import ProfileEdit from './Components/Form/profileEdit';
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
    <PrivateRoute exact path="/detail" component={PostDetail}/>
    <PrivateRoute exact path="/StudentResource" component={ResourceView} />
    <PrivateRoute exact path="/Profile/Edit" component={ProfileEdit}/>

    
    
    <Route render={function(){
                        return (<Error/>); 
                    }}/>
    </Switch>
</Router>
</AuthProvider>

  );
}

export default App;
