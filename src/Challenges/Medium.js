import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

class BasicInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            number: props.number,
            DOB: props.DOB,
        };
    }

    render() {
        return (
            <div className="Person">
                <h1>{this.state.person.name}</h1>
                <h1>{this.state.person.number}</h1>
                <h1>{this.state.person.DOB}</h1>
            </div>
        )
    }
}

export default BasicInfo;

/* <BasicInfo />;
ReactDOM.render (
    <BasicInfo />, document.getElementById('App')
); */