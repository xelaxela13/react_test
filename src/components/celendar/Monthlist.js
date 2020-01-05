import React, {Component} from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Monthlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            months: [],
            itemsPMonth: {'1':[],'2':[],'3':[],'4':[],'5':[],'6':[],'7':[],'8':[],'9':[],'10':[],'11':[],'12':[]},
            colors: {2: 'gray', 6: 'blue', 10: 'green', 11: 'red'}
        };
        this.parseMonth = this.parseMonth.bind(this);
        this.getColor = this.getColor.bind(this)
    }

    componentDidMount() {
        this.setState({
            months: monthNames,
            itemsPMonth: this.props.items.map(item=>{this.state.itemsPMonth[this.parseMonth(item.dob)].push(item)})
        });
    }


    moveEvent({event, start, end}) {

        console.log(event)
    }
    getColor(itemLength){
        let color;
        if(itemLength < 3){
            color = 'gray'
        }else if(2 < itemLength < 7){
            color = 'blue'
        }else if(6 < itemLength < 11){
            color = 'green'
        }else if(itemLength > 10){
            color = 'red'
        }
        return color
    }

    parseMonth(dateString) {
        let dateObject = new Date(dateString);
        return dateObject.getMonth() + 1
    }

    render() {
        const {months, itemsPMonth} = this.state;
        console.log(itemsPMonth)
        return (
            <div className="d-flex justify-content-around my-3">
                {months.map((element, index) => (
                    <button key={index} style={{backgroundColor: this.getColor(itemsPMonth[index+1]) }} className="btn btn-primary">
                        {element}
                    </button>
                ))}
            </div>
        );
    }
}

export default Monthlist;
