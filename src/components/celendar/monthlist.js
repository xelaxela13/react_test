import React, {Component} from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class MonthList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            months: []
        };
        // this.moveEvent = this.moveEvent.bind(this)
    }

    componentDidMount() {
        this.setState({
            months: monthNames
        });
    }

    moveEvent({event, start, end}) {

        console.log(event)
    }

    render() {
        const {months} = this.state;
        return (
            <div className="d-flex justify-content-around my-3">
                {months.map((element, index)=>(<button key={index} className="btn btn-primary">{element}</button>))}
            </div>
        );
    }
}

export default MonthList;
