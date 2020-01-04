import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Monthlist from "./components/celendar/Monthlist";
import Get from "./actions/fetch";

const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.parseMonth = this.parseMonth.bind(this)
    }

    componentDidMount() {
        let response = Get(url);
        console.log(response)
        if (response) {
            this.setState({
                isLoaded: true,
                items: response['result']
            });
        }
        // fetch(url)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    parseMonth(dateString) {
        let dateObject = new Date(dateString);
        return dateObject.getMonth() + 1
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div>
                    <Monthlist/>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.id} {item.firstName} {item.lastName} {item.dob} {this.parseMonth(item.dob)}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default App;
