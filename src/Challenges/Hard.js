import React from 'react';
/* import ReactDOM from 'react-dom'; */
import BasicInfo from './Medium';

const CollectBasicInfo = () => {
    const personInfo = [
        {name: "Blair",
         age: "24",
         DOB: "11/24/1990"},

        {name: "Dan",
         age: "24",
         DOB: "10/20/1990"},
         
        {name: "Serena",
         age: "23",
         DOB: "07/14/1991"},
         
        {name: "Chuck",
         age: "23",
         DOB: "01/19/1991"},

        {name: "Georgina",
         age: "24",
         DOB: "11/08/1990"},

        {name: "Nate",
         age: "23",
         DOB: "04/05/1991"},

        {name: "Jenny",
         age: "21",
         DOB: "03/30/1993"},

        {name: "Eric",
         age: "21",
         DOB: "02/21/1993"} 
    ];

    return (
        <div className="peopleInfo">
            {personInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} DOB={info.DOB} />
            ))}
        </div>
    );
};

export default CollectBasicInfo;

/* <CollectBasicInfo />
ReactDOM.render(
    <CollectBasicInfo />, document.getElementById('App')
); */