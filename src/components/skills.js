import React,{useState} from "react";
import {Grid} from "semantic-ui-react";
import Line from "./line";
function Skills() {
    const skills = [
        {skill:'React Native',colors:'red',level:""},
        {skill:'React.js',colors:'orange',level:""},
        {skill:'TypeScript',colors:'yellow',level:""},
        {skill:'JavaScript',colors:'olive',level:""},
        {skill:'Python',colors:'green',level:""},
        {skill:'Java',colors:'teal',level:""},
        {skill:'Vue.js',colors:'violet',level:""},
        {skill:'SQL',colors:'purple',level:""},
        {skill:'Object-Oriented',colors:'pink',level:""},
        {skill:'OPP',colors:'brown',level:""},
        {skill:'Data Structures',colors:'pink',level:""},
        {skill:'Hebrew',colors:'grey',level:"Native"},
        {skill:'English',colors:'blue',level:"Advanced"},
        {skill:'TDD',colors:'olive',level:""},
        {skill:'',colors:'violet',level:""},
    ]
    return (
        <div style={{marginRight:'10%',marginLeft:'10%',marginTop:"5%",marginBottom:"10%"}}>
            <h1>SKILLS</h1>
            <Line/>
            <Grid columns={4} padded>
                {skills.map((skill) => (
                    <Grid.Column color={skill.colors} key={skill.colors}>
                        <h2 style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                            {skill.skill}
                            <br/>
                            {skill.level}
                        </h2>

                    </Grid.Column>
                ))}
            </Grid>
        </div>


    );
}
export default Skills;
