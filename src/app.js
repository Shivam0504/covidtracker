import React from 'react';


import NavBar from './components/navbar/navbar';
import { BrowserRouter as Router ,Route,Switch, HashRouter} from 'react-router-dom';

//import {About,Country,Global,India} from './routes';
import About from './routes/about'
import Country from './routes/country'
import Global from './routes/global'
import India from './routes/india'
//import indigo from '@material-ui/core/colors/indigo';

class App extends React.Component{
    

    render(){
        return (
            <HashRouter>
            <div style={{backgroundColor:"#f5f5f5"}}>
                <NavBar/>
                <Switch>
                <Route exact path="/">
                <Global />
                </Route>
                <Route exact path="/about">
                <About />
                </Route>
                <Route exact path="/country">
                <Country />
                </Route>
                <Route exact path="/india">
                <India />
                </Route>
                </Switch>
                
            </div>
            </HashRouter>
        )
    }
}


export default App;