import React,{useState} from "react";
import {Button, Form, TextArea} from "semantic-ui-react";
import Line from "./line";
function ContactMe() {
    const [firstName,setFirstName] = useState(0)
    const [lastName,setLastName] = useState(0)
    const [subject,setSubject] = useState(0)
    const [massage,setMessage] = useState(0)
    const Mailto = ({ email, subject, body, ...props }) => {
        const mail = body+'%0A'+firstName+' '+lastName
        return (
            <Button href={`mailto:${email}?subject=${subject || ""}&body=${mail || ""}`}>
                {props.children}
            </Button>
        );
    }
    return (
        <div style={{}}>
            <h1>CONTACT ME</h1>
            <Line/>
            <Form>
                <Form.Group widths={2}>
                    <Form.Input label='First name' placeholder='First name' onChange={(e)=>setFirstName(e.target.value)} />
                    <Form.Input label='Last name' placeholder='Last name' onChange={(e)=>setLastName(e.target.value)} />
                </Form.Group>
                <Form.Input label='Subject' placeholder='Subject' onChange={(e)=>setSubject(e.target.value)}/>
                <label>Message</label>
                <TextArea placeholder='Message' onChange={(e)=>setMessage(e.target.value)}/>
                <div style={{display:'flex',justifyContent:'center',alignContent:"center",marginTop:'10px'}}>
                    <Mailto email="deablinder91@gmail.com" subject={subject} body={massage}>Submit</Mailto>
                </div>
            </Form>
        </div>
    );
}

export default ContactMe;
