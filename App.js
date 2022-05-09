import React,{useState} from "react";
import {Button, Icon, Image} from "semantic-ui-react";
import ContactMe from "./src/components/contactMe";
import QuickId from "./src/components/quickId";
import Content from "./src/components/content";
import Skills from "./src/components/skills";
import Footer from "./src/components/footer";
// import file from "./src/assets/Electric Muscle Stimulation - EMS .pdf";

const coverPhoto = require('./src/assets/cover2.jpeg')
const profilePic = require('./src/assets/profilePic.jpeg')
const back = require('./src/assets/back2.png')
function App() {
    const [pageNumber,setPageNumber] = useState(0)
    const renderProfilePicAndName = () =>{
        return(
            <div>
                <Image bordered style={{margin:'auto',top:'-200px', justifyContent:'center',display:'flex',alignSelf:'center',borderColor:"white",borderWidth:"10px"}} size='medium' src={profilePic} circular/>
                <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:"column",marginTop:'-200px'}}>
                    <h1>Dean Blinder</h1>
                    <h2>Software and information system Engineer</h2>
                </div>
            </div>
        )
    }
    const renderContentAndArrows = () =>{
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',marginTop:'5%'}}>
                <div onClick={()=>pageNumber === 0 ? setPageNumber(3) : setPageNumber(pageNumber-1)}>
                    <Icon name='angle left' size='huge'/>
                </div>
                <div style={{width:"80%"}}>
                    <Content pagenumber={pageNumber}/>
                </div>
                <div onClick={()=>pageNumber === 3 ? setPageNumber(0) : setPageNumber(pageNumber+1)}>
                    <Icon name='angle right' size='huge'/>
                </div>
            </div>
        )
    }
    const renderQuickIdAndConectMe  = () =>{
        return(
            <div className='Details' style={{backgroundColor:''}}>
                <div style={{width:'80%',height:'5px',backgroundColor:'teal' ,marginBottom:'40px',marginLeft:"10%",marginRight:'10%'}}/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:"space-between",marginRight:'10%',marginLeft:'10%'}}  className='ContactMe'>
                    <div style={{}}>
                        <QuickId/>
                    </div>
                    <div style={{width:"40%"}}>
                        <ContactMe/>
                    </div>
                </div>
            </div>
        )
    }
    return (
    <div className='app' style={{backgroundImage:`url(${back})` }}>
        <Image style={{width:'100%'}} src={coverPhoto}/>
        <div style={{marginBottom:"2%", marginTop:"2%",marginLeft:"10%",top:0}}>
            <Button color='red' download>DOWNLOAD FULL RESUME</Button>
        </div>
        <div>
            {renderProfilePicAndName()}
            {renderContentAndArrows()}
            <Skills/>
            {renderQuickIdAndConectMe()}
        </div>
        <Footer/>
        <div/>
    </div>
  );
}

export default App;
