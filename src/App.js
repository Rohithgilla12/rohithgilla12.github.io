import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from '../node_modules/react-router-dom';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header class="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
