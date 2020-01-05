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
};

class Monthlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            months: [],
            itemsPerMonth: {},
            itemsForMonth: []
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
                itemsPerMonth: itemsPMonth
            });
        }
    }

    onMouseOverEvent = (e) => {
        this.setState({
            itemsForMonth: this.state.itemsPerMonth[e.target.dataset['index']]
        })
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
        const {months, itemsPerMonth, itemsForMonth} = this.state;
        return (
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-around my-3">
                {months.map((element, index) => (
                        <button key={index} style={{backgroundColor: this.getColor(itemsPerMonth[index + 1].length)}}
                                className="btn btn-info mb-3"
                                data-index={index + 1}
                                onMouseOver={(e) => this.onMouseOverEvent(e)}>
                            {element} - {itemsPerMonth[index + 1].length}
                        </button>
                    )
                )}
                </div>
                <div className={itemsForMonth ? "d-block" : "d-none"}>
                    <ul>
                    {itemsForMonth.map((item, index)=>(
                       <li key={index}>{item.id} {item.firstName} {item.lastName} {item.dob}</li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Monthlist;
