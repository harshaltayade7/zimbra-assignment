import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen'


// Nothing handled in this
export default class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={HomeScreen}  exact />
                        <Route path="/about" component={HomeScreen} />
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}