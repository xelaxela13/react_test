import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Monthlist from "./components/celendar/Monthlist";
import Fetch from 'react-fetch-component'

const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

class App extends Component {
    render() {
        return (
            <Fetch url={url}>
                {({loading, error, data}) => (
                    <div className="container">
                        {loading && <h1>{loading}</h1>}
                        {error && <h1>{error}</h1>}
                        {data &&
                        <div className="row">
                            <div className="col-12">
                                <h3><a href="https://github.com/xelaxela13/react_test" target="_blank">GitHub link</a></h3>
                                <Monthlist items={data}/>
                            </div>
                        </div>
                        }
                    </div>
                )}
            </Fetch>
        );
    }
}

export default App;
