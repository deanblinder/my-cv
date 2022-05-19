import React from "react";
import {Icon} from "semantic-ui-react";
import Line from "./line";
function Content(props) {
    const Experience = {
        title:'EXPERIENCE',
        section:[
            {
                sectionTitle:'Mobile Developer at Wix.com',
                sectionTime:'july 2021 - now',
                sectionDescription:[
                    'Developing the "Owner App by Wix" with React Native and TypeScript, an application that serves more than 1 Million users around the world.',
                    'Working close to the product manager and the UX designer and back-end engineers.',
                    'Write scalable code using best practices and principles.',
                    'Work as a part of a team and independently and also with other teams around the world. '
                ]
            },
            {
                sectionTitle:'IT, Recruiting Station, IDF',
                sectionTime:'july 2010 - july 2013',
                sectionDescription:[
                    'Inspected and upgraded users computer networking systems updated software and replaced outdated hardware, including desktop PCs, laptops, routers, and ethernet cables.',
                    'Graduating SAP implementation course and implementing it in the base.',
                    'Instructed new software features for system users.'
                ]
            }
        ]
    }
    const Projects = {
        title:'PROJECTS',
        section:[
            {
                sectionTitle:'React.js Application',
                sectionDescription:[
                    'An application targeted at assisting users during the pandemic.' +
                    '\n People can upload a grocery list request.' +
                    '\n Anyone who wishes to assist can view the requests on the map with details and contact the requester directly through WhatsApp and Facebook using google maps API, react.js, and Firebase.'
                ],
                links: {
                        video:'https://www.linkedin.com/posts/dean-blinder-1276a31a9_reactjs-firebase-ugcPost-6726485485578989568-QxBB/',
                        git:'https://github.com/deanblinder/buyTheWay'
                    }

            },
            {
                sectionTitle:'React Native hitchhiking Mobile App',
                sectionDescription:[
                    'In progress developing Mobile App, anyone can request a ride from anywhere to anywhere.'
                ]
            }
        ]
    }
    const Education = {
        title:'EDUCATION',
        section:[
            {
                sectionTitle:'Bachelor of Science.\nSoftware And Information Systems Engineering,\n Ben Gurion University',
                sectionTime:'july 2017 - now',
                sectionDescription:[
                    'Expected graduation: July 2022'
                ]
            },
            {
                sectionTitle:'High School Diploma, The Hebrew Reali School in Haifa',
                sectionTime:'1998 - 2010',
                sectionDescription:[
                    'Extended courses: Computer Science'
                ]
            }
        ]
    }
    const About = {
        title:'ABOUT ME',
        section:[
            {
                sectionDescription:[
                    'Software and Information Engineering graduate at Ben Gurion University. ' +
                    'Work experience at Wix.com company as a Mobile Developer (React Native and TypeScript). '
                ]
            },
            {
                sectionDescription:[
                    'Working closely with the product manager and UX designer. ' +
                    'Wxperience in-site and off-site communication, good team player, and independent. ' +
                    'Looking for my next challenge after an internship at Wix.com.'
                ]
            },
        ]
    }
    const content = [
        About,
        Experience,
        Education,
        Projects
    ]

    return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{margin:'auto'}}>
                </div>
                <div>
                    <div  style={{display:'flex',justifyContent:"space-between"}}>
                        <h1>{content[props.pagenumber].title}</h1>
                        <div style={{marginLeft:'5%'}}>
                            <Icon name='facebook' size='big' link onClick={()=> window.open("https://www.facebook.com/safety.service.89654217")} />
                            <Icon name='linkedin' size='big' link onClick={()=> window.open("https://www.linkedin.com/in/dean-blinder-1276a31a9/")} />
                            <Icon name='github' size='big' link onClick={()=> window.open("https://github.com/deanblinder")}/>
                        </div>
                    </div>
                    <Line/>
                    <div style={{display:'grid',gridTemplateColumns:'2fr 2fr',gap: '10px'}}>
                        {
                            content[props.pagenumber].section.map((sec) => {
                                return(
                                    <div>
                                        <h2>{sec?.sectionTitle?.split('\n').map(str => <p style={{marginBottom:'0'}}>{str}</p>)}</h2>
                                        <h2>{sec?.sectionTime}</h2>
                                        <ul>
                                            {
                                                sec.sectionDescription.length > 1 ?
                                                sec.sectionDescription.map((desc)=>{
                                                    return(
                                                        <li style={{marginBottom:'10px'}}>
                                                            <h3>{desc.split('\n').map(str => <p style={{marginBottom:'0'}}>{str}</p>)}</h3>
                                                        </li>
                                                    )
                                                }):sec.sectionDescription.map((desc)=>{
                                                        return(
                                                            <div style={{marginBottom:'10px'}}>
                                                                <h3>{desc.split('\n').map(str => <p style={{marginBottom:'0'}}>{str}</p>)}</h3>
                                                            </div>
                                                        )
                                                    })
                                            }
                                            {sec.links ? <Icon name='github' size='big' link onClick={()=> window.open(sec.links.git)}/> : undefined}
                                            {/*<a href={sec.links.git}>gitHub link</a>*/}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h2>{content[0].section.sectionDescription}</h2>
                </div>
                <div style={{margin:'auto'}}>
                </div>
            </div>
    );
}

export default Content;
