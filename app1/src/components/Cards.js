import React from "react";


function Cards() {


    const data = [{ left: "black" }, { middle: "blue" }, { right: "pink" }];


    return (
        <>

            {
                data.map((ele, index) => (

                    <div key={index} className={Object.keys(ele)[0]} style={{ backgroundColor: Object.values(ele)[0] }}>Column</div >

                ))
            }

        </>


    )
}
export default Cards;