import React, { Component } from 'react';
import Posts  from './userPosts/Posts';
import Resource from './Resources/ResourceCorsol';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div>

                <div>
<Link  className="btn  btn-elegant" to={{ pathname: '/createPost'}}>create</Link>
<button type="button" class="btn btn-unique">Unique</button>

                </div>
<hr/>


                <Posts/>
            </div>
        );
    }
}

export default Home;
