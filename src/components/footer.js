import React,{useState} from "react";
import {Form, Icon, TextArea,Segment,Button} from "semantic-ui-react";
// const file =  require('../assets/Electric Muscle Stimulation - EMS .pdf')
function Footer() {
    return (
        <div style={{backgroundColor:'teal',display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:'2%'}}>
            <div style={{marginBottom:"2%", marginTop:"2%"}}>
                {/*<Button href={file} download>DOWNLOAD FULL RESUME</Button>*/}
            </div>
            <div style={{marginLeft:'5%',marginBottom:"2%", marginTop:"2%"}}>
                <div style={{display:'flex',justifyContent:"center"}}>
                    <Icon name='facebook' size='big' link onClick={()=> window.open("https://www.facebook.com/safety.service.89654217")} />
                    <Icon name='linkedin' size='big' link onClick={()=> window.open("https://www.linkedin.com/in/dean-blinder-1276a31a9/")} />
                    <Icon name='github' size='big' link onClick={()=> window.open("https://github.com/deanblinder")}/>
                </div>
                <text>Follow me on social netwroks</text>
            </div>


        </div>
    );
}

export default Footer;
