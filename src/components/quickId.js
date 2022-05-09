import React,{useState} from "react";
import Line from "./line";
function QuickId() {
    const details = [
        {title:'Name:',content:'Dean Blinder'},
        {title:'Phone:',content:'0523980151'},
        {title:'Email:',content:'deanblinder91@gmail.com'},
        {title:'Address:',content:'Israel, Tel Aviv'},
    ]

    return (
        <div style={{height:"100%"}}>

            <h1>QUICK ID</h1>
            <Line/>
                    {
                        details.map((elem) => {
                            return(
                                <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',textAlign:'left',marginBottom:"12%"}} className='ContactMe'>
                                    <div style={{fontWeight:'bold',fontSize:'20px'}}>
                                        {elem.title}
                                    </div>
                                    <div style={{fontWeight:'bold',fontSize:'20px'}}>
                                        {elem.content}
                                    </div>
                                </div>

                            )
                        })
                    }
        </div>
    );
}

export default QuickId;
