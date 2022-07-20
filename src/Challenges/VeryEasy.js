import React, {Component} from 'react';
/* import ReactDom from 'react-dom'; */

class BasicInfo extends React.Component {
    render () {
        return (
            <div>
                <p>name</p>
                <p>number</p>
                <p>DOB</p>
            </div>
        );
    }
}

export default BasicInfo;

{/* <BasicInfo />
ReactDOM.render(
    <BasicInfo />, document.getElementById('App')
); */}