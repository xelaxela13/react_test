import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MonthList from "./components/celendar/monthlist";

const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                    <MonthList/>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.id} {item.firstName} {item.lastName} {item.dob}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default App;
