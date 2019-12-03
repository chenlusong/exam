import React from 'react'
import {HashRouter as Router , Route , Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";
import MyView from '../SiderNav/index1'
import LoginModule from '../../routes/Login/RegisterForm'
import MyPicture  from '../../routes/About/index'
import MyDocument from '../../routes/General/ButtonDemo/index'
export default class MyRoute extends React.Component{
    render(){
        return(
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={LoginModule}/>
                     <MyView path='/View' component={MyDocument}>
                        <Route path="/View/abc" component={MyDocument} />
                        <Route path="/View/myPicture" component={MyPicture} /> 
                    </MyView>   
                </Switch>
            </Router>
        )
    }  
}
