import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from "react-router-dom";

function Home(){
    return(
        <div>
            <h2>Home</h2>
            <p>Home ...</p>
        </div>
    )
}

const contents = [
    {id:1, title:'HTML', desc:'HTML is ...'},
    {id:2, title:'CSS', desc:'CSS is ...'},
    {id:3, title:'JS', desc:'JS is ...'}
]

function Topic(){
    const params = useParams();
    let selected_topic = {
        title: 'Sorry',
        desc: 'Not Found'
    };
    for (const cont of contents){
        if (cont.id === Number(params.topic_id)) {
            selected_topic = {
                title: cont.title,
                desc: cont.desc
            };
            break;
        }
    }
    return(
        <div>
            <h3>{selected_topic.title}</h3>
            <p>{selected_topic.desc}</p>
        </div>
    )
}

function Topics(){
    const lis = contents.map(cont =>
        <li key={cont.id}><NavLink to={"/topics/" + cont.id}>{cont.title}</NavLink></li>
    );
    return(
        <div>
            <h2>Topics</h2>
            <ul>
               {lis}
            </ul>
            <Route path="/topics/:topic_id">
                <Topic />
            </Route>
            {/* <Switch>
                <Route path="/topics/1">
                    <p>HTML is ...</p>
                </Route>
                <Route path="/topics/2">
                    <p>CSS is ...</p>
                </Route>
                <Route path="/topics/3">
                    <p>JS is ...</p>
                </Route>
            </Switch> */}
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            <p>Contact ...</p>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Hello React Router DOM</h1>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/topics">Topics</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/topics"><Topics /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route path="/">Not found</Route>
            </Switch>
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
