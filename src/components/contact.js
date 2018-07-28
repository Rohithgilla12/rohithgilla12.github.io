import React, { Component } from 'react';
import {Grid, Cell, ListItem,List, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Rohith Gilla</h2>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{
                        height:'250px'
                    }}
                    />
                    <p
                    style={{
                        margin:'auto'
                    }}
                    >
                    I'm Rohith Gilla, a student pursuing B.Tech in the stream of Computer Science Engineering from Mahindra Ecole Centrale. I love to code and develop stuff. 
                    I code in various languages like Python, C/C++, Java, full stack web developer.
                     I love to take up responsibilities, love to share knowledge with other and a Open Source contributor
                        </p>
                    </Cell>
                    <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent 
                            style={{
                                fontSize:'35px',
                                fontFamily:'Anton'
                            }}
                            >
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            (91)8790089990
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent 
                            style={{
                                fontSize:'35px',
                                fontFamily:'Anton'
                            }}
                            >
                            <i className="fa fa-envelope" aria-hidden="true" />
                            gillarohith1@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent 
                            style={{
                                fontSize:'35px',
                                fontFamily:'Anton'
                            }}
                            >
                            <i className="fa fa-skype" aria-hidden="true" />
                            Rohithgilla
                            </ListItemContent>
                        </ListItem>  
                        <ListItem>
                            <ListItemContent 
                            style={{
                                fontSize:'35px',
                                fontFamily:'Anton'
                            }}
                            >
                            <i className="fa fa-telegram" aria-hidden="true" />
                            @Gilla_Dude
                            </ListItemContent>
                        </ListItem>                                                                        
                        </List>
                    </div>                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;