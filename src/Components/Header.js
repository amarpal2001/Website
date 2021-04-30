import React from 'react'
import './Header.css'
import Amar from './Video/Amar.mp4'
import Umesh from './Video/Umesh.jpg'
import { Card} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Grid,Paper, Avatar, TextField, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Footer from './Footer';




const Header = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
        <div>
            <div class="navbar">
                <a class="logo" href="#"> Amarpal</a>
                <ul class="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><a href="#portfolio">Footer</a></li> */}

                </ul>
            </div>
            <video autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        zIndex: "-1"

                    }}
                >
                    <source src={Amar} type="video/mp4" />
                </video>
            <div>
            </div>
            <section class="banner-area" id="home">
            </section>
            <section class="about-area" id="about">
                <div class="text-part">
                    <h1 className="about">
                        About Me</h1>
                        <img src={Umesh} alt="Amarpal" style={{borderRadius:"60%", textAlign:'center'}}/>
                    <p className="about">
                    I am from New Delhi. I always had an interest in computers and this is the reason behind me working towards my goal to become a Software Engineer. I did most of my schooling from an NGO known as Pragati Wheel School. I completed my 10th and 12th from NIOS and joined Navgurukul. I am still learning in Navgurukul.
                    </p>
                </div>
            </section>

            {/* <section class="port-area" id="portfolio">
                <div class="text-part">
                    <h1>
                        Portfolio Area</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
                </div>
            </section> */}

            <section class="service-area" id="services">
                <div class="text-part">
                    <h1>Projects</h1>
                    <div class="card-deck">
                    <div class="card">
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Blog App</h5>
                        <p className='textp'><strong>I have used Reactjs and material ui in this project. You can create your account and logIn to your account. I am using APIs to post data to database postgreSql.</strong></p>
                        {/* <Button>submit</Button> */}
                        <Button className='btn' variant="contained" color="secondary"><a href="https://github.com/amarpal2001/Blog_app" style={{textDecoration:'none'}} target="_blank">View</a></Button>

                        </div>
                        
                    </div>
                    <div class="card">
                        <img className="card-img-top" src="https://wallpapercave.com/wp/wp2234539.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Todo App</h5>
                        <p className='textp' ><strong>It's a list of tasks you need to complete, or things that you want to do. In this project, I have used reactjs and one can add  tasks and delete them after finishing.</strong></p>
                        <Button className='btn' variant="contained" color="secondary" ><a href="https://github.com/amarpal2001/Todo_app" style={{textDecoration:'none'}} target="_blank">View</a></Button>

                        </div>
                    </div>
                    <div class="card">
                        <img className="card-img-top" src="https://wallpapercave.com/wp/Z4CD0Ic.jpg" alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Weather App</h5>
                        <p className='textp' ><strong>This project will show you the current weather of Cities.I have used the openweathermap API to fetch data using the axios library.
</strong></p>
                        {/* <Button>submit</Button> */}
                        <Button variant="contained" color="secondary" className='btn'><a href="https://github.com/amarpal2001/weather_app" style={{textDecoration:'none'}} target="_blank">View</a></Button>

                        </div>

                    </div>
                    </div>
                </div>
            </section>

            <section className="contact-area" id="contact">
                <div class="text-part">
                    <h1>Contact Me</h1>
                    <hr style={{color:'black'}}/>
                    <MailIcon style={{fontSize:'50px', color:'chartreuse', marginRight:'50px'}}/>
                    <h3 style={{marginRight:'40px'}}>amarpal19@navgurukul.org</h3>
                    <div style={{marginTop:'100p'}}>
                        <h1>LETS BE IN TOUCH</h1>
                    </div>

                    {/* <Grid>
                <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Fullname' placeholder='Enter Name' fullWidth required/>
                <TextField label='email' placeholder='Enter email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                {/* <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid> */}
                </div>
            </section>
            <Footer/>
        </div>
    )
}
export default Header;
