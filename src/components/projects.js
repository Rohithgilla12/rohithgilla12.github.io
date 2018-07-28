import React, { Component } from 'react';
import {Tabs,Tab,Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <div className="cardPlace">
                        <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle
                        style={{
                            height:'220px',
                            background: 'url(https://neva125671182.files.wordpress.com/2017/12/12.png) center'
                        }}
                        >
                        
                            </CardTitle>
                        <CardText>
                            <h4>Twitter NewsAnalyser Bot</h4>
                        Twitter Bot which analyses and compares the similar kind of news and plots the polarity and subjectivity of the news channel on trending topic.
                            </CardText>
                        <div className="cardDetails">
                        <CardActions border style={{margin:'auto'}}>
                        <a href="https://github.com/Rohithgilla12/TwitterNewsAnalyserBot" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                        <a href="https://twitter.com/BotGills" target="_blank" rel="noopener noreferrer"><Button colored >Twitter</Button></a>
                        </CardActions>
                        </div>
                        </Card>
                    </div>
                    {/* <div className="cardPlace">
                        <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle
                        style={{
                            height:'180px',
                            background: 'url(https://neva125671182.files.wordpress.com/2017/12/12.png) center'
                        }}
                        >
                        
                            </CardTitle>
                        <CardText>
                            <h4>Twitter NewsAnalyser Bot</h4>
                        Twitter Bot which analyses and compares the similar kind of news and plots the polarity and subjectivity of the news channel on trending topic.
                            </CardText>
                        <div className="cardDetails">
                        <CardActions border style={{margin:'auto'}}>
                        <a href="https://github.com/Rohithgilla12/TwitterNewsAnalyserBot" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                        <a href="https://twitter.com/BotGills" target="_blank" rel="noopener noreferrer"><Button colored >Twitter</Button></a>
                        </CardActions>
                        </div>
                        </Card>
                    </div> */}
                
                </div>
                
            )
        }
        else if (this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                <div className="cardPlace">
                    <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle
                    style={{
                        height:'220px',
                        background: 'url(https://code.djangoproject.com/raw-attachment/ticket/24953/django-hexbin.png) center/cover'
                    }}
                    >
                    
                        </CardTitle>
                    <CardText>
                        <h4>TweetMe</h4>
                    Twitter like project created using Django, you can tweet, edit,view, delete basically implementation of CRUD. Designed using Bootstrap framework.
                    Will be adding liking and following in near future.
                        </CardText>
                    <div className="cardDetails">
                    <CardActions border style={{margin:'auto'}}>
                    <a href="https://github.com/Rohithgilla12/TweetMe" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                    {/* <a href="https://twitter.com/BotGills" target="_blank" rel="noopener noreferrer"><Button colored >Twitter</Button></a> */}
                    </CardActions>
                    </div>
                    </Card>
                </div>
            </div>

            )
        }
        else if (this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                <div className="cardPlace">
                    <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle
                    style={{
                        height:'220px',
                        background: 'url(https://i.pinimg.com/236x/fd/23/67/fd23672d35261d602ff78ec94038b902--java.jpg) center no-repeat'
                    }}
                    >
                    
                        </CardTitle>
                    <CardText>
                        <h4>Telugu Songs Downloader</h4>
                        This is a Java Desktop Application to download telugu songs and at the same time get lyrics of them in a text file.
                        This is a GUI Application, works on webscraping.
                        </CardText>
                    <div className="cardDetails">
                    <CardActions border style={{margin:'auto'}}>
                    <a href="https://github.com/Rohithgilla12/Java-Song-App" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                    {/* <a href="https://twitter.com/BotGills" target="_blank" rel="noopener noreferrer"><Button colored >Twitter</Button></a> */}
                    </CardActions>
                    </div>
                    </Card>
                </div>
            </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                <div className="cardPlace">
                    <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle
                    style={{
                        height:'250px',
                        background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png)  50% center/cover '
                    }}
                    >
                    
                        </CardTitle>
                    <CardText>
                        <h4>Note Master</h4>
                        A webapp build on Vue-Js as frontend and firebase as backend database, it is a notemaking app.
                        </CardText>
                    <div className="cardDetails">
                    <CardActions border style={{margin:'auto'}}>
                    <a href="https://github.com/Rohithgilla12/notetaker" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                    <a href="https://vue-notemaster.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><Button colored >Live Demo</Button></a>
                    </CardActions>
                    </div>
                    </Card>
                </div>
            </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return(
                <div className="projects-grid">
                <div className="cardPlace">
                    <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle
                    style={{
                        height:'250px',
                        background: 'url(https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default)  50% center/cover '
                    }}
                    >
                    
                        </CardTitle>
                    <CardText>
                        <h4>My porfolio</h4>
                        The website you are currently seeing :p, built on react js and react mdl.
                        </CardText>
                    <div className="cardDetails">
                    <CardActions border style={{margin:'auto'}}>
                    <a href="https://github.com/Rohithgilla12/portfolio" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                    <a href="http://rohithgilla.me/" target="_blank" rel="noopener noreferrer"><Button colored >Live Demo</Button></a>
                    </CardActions>
                    </div>
                    </Card>
                </div>
            </div>
            )
        }
        else if (this.state.activeTab === 5) {
            return(
                <div className="projects-grid">
                <div className="cardPlace">
                    <Card shadow={4} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle
                    style={{
                        height:'250px',
                        background: 'url(http://www.webfuture.us/wordpress-development/images/web-future-solutions-technologies.png)  50% center/cover '
                    }}
                    >
                    
                        </CardTitle>
                    <CardText>
                        <h4>Sree Durga Constructions</h4>
                        A simple business website for a construction company, made using HTML5, CSS3, JS, Bootstrap Framework, Animate.js and few libraries.
                        </CardText>
                    <div className="cardDetails">
                    <CardActions border style={{margin:'auto'}}>
                    <a href="https://github.com/Rohithgilla12/sreedurgaconstructions" target="_blank" rel="noopener noreferrer"><Button colored >GitHub</Button></a>
                    <a href="http://rohithgilla.me/sreedurgaconstructions/" target="_blank" rel="noopener noreferrer"><Button colored >Live Demo</Button></a>
                    </CardActions>
                    </div>
                    </Card>
                </div>
            </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Python</Tab>
                    <Tab>Django</Tab>
                    <Tab>Java</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>HTML/CSS/JS</Tab>
                </Tabs>

                <section>
                <Grid>
                    <Cell col={12}>
                    <div className="content">
                    {this.toggleCategories()}
                    </div>
                        </Cell>
                </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;