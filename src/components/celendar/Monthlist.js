import React, {Component} from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let itemsPMonth = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    '11': [],
    '12': []
}

class Monthlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            months: [],
            itemsPMonth: {}
        };

    }

    componentDidMount() {
        this.setState({
            months: monthNames
        });

        if (this.props.items) {
            this.props.items.map((item) => {
                itemsPMonth[this.parseMonth(item.dob)].push(item)
            });
            this.setState({
                itemsPMonth: itemsPMonth
            });
        }
    }

    moveEvent = (event, start, end) => {

        console.log(event)
    };

    getColor = (itemLength) => {
        let color;
        if (itemLength < 3) {
            color = 'gray'
        } else if (itemLength < 7 && itemLength > 2) {
            color = 'blue'
        } else if (itemLength < 11 && itemLength > 6) {
            color = 'green'
        } else if (itemLength > 10) {
            color = 'red'
        }
        return color
    };

    parseMonth = (dateString) => {
        let dateObject = new Date(dateString);
        return dateObject.getMonth() + 1
    };

    render() {
        if (this.props.items) {
            const {months, itemsPMonth} = this.state;
            console.log(itemsPMonth)
            return (
                <div className="d-flex justify-content-around my-3">
                    {months.map((element, index) => (
                            <button key={index} style={{backgroundColor: this.getColor(itemsPMonth[index + 1].length)}}
                                    className="btn btn-primary">
                                {element}
                            </button>
                        )
                    )}
                </div>
            );
        }

    }
}

export default Monthlist;
