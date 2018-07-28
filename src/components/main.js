import  React from 'react';
import Route from "../../node_modules/react-router-dom/Route";
import { Switch } from "../../node_modules/react-router-dom";
import Landing from './landingpage';
import About from './aboutme';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';

const Main = () => (
    <Switch>
        < Route exact path= "/" component={Landing} />
        < Route exact path= "/aboutme" component={About} />
        < Route exact path= "/projects" component={Projects} />
        < Route exact path= "/contact" component={Contact} />
        < Route exact path= "/resume" component={Resume} />
    </Switch>
)
export default Main;