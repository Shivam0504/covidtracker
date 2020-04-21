import React from 'react';


import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

//import {About,Country,Global,India} from './routes';
import About from './routes/about'
import Country from './routes/country'
import Global from './routes/global'
import India from './routes/india'
//import indigo from '@material-ui/core/colors/indigo';

class App extends React.Component{
    

    render(){
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <div style={{backgroundColor:"#f5f5f5"}}>
                <NavBar/>
                <Switch>
                <Route exact path="/">
                <Global />
                </Route>
                <Route path="/about">
                <About />
                </Route>
                <Route path="/country">
                <Country />
                </Route>
                <Route path="/india">
                <India />
                </Route>
                </Switch>
                
            </div>
            </Router>
        )
    }
}


export default App;