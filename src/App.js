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
                    <div>
                        {loading && <h1>{loading}</h1>}
                        {error && <h1>{error}</h1>}
                        {data &&
                        <div>
                            <Monthlist items={data}/>
                            <ul>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        {item.id} {item.firstName} {item.lastName} {item.dob}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        }
                    </div>
                )}
            </Fetch>
        );
    }
}

export default App;
