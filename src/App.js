import { NavLink, Switch, Route } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <div>
      <Navbar>
        <NavLogo icon={<i class="fas fa-angle-double-right fa-2x"/>} title='Alan Xia' />
        <NavItem icon={<i class="fas fa-home fa-lg" />} category='Home' to='/about'/>
        {/* <NavItem icon={<i class="fas fa-cat fa-2x" />} category='Pets' to='/about'/> */}
        <NavItem icon={<i class="fas fa-code fa-lg" />} category='Projects' to='/projects'/>
        <NavItem icon={<i class="far fa-file fa-2x" />} category='Resume' to='/resume'/>
        {/* <NavItem icon={<i class="fas fa-language fa-lg" />} category='Languages' to='/languages'/> */}
        <NavItem icon={<i class="far fa-address-book fa-2x" />} category='Contact' to='/contact'/>
        <NavThemify icon={[<i class="fas fa-moon fa-2x" />, <i class="fas fa-sun fa-2x" />, <i class="fas fa-cloud-sun fa-lg" />]} category='Themify' />
      </Navbar>
      <Main />
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  return (
    <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="current" to={props.to}>
        {props.icon}
        <span class="link-text">{props.category}</span>
      </NavLink>
    </li>
  );
}

function NavLogo(props) {

  return (
    <li className="logo">
      <NavLink className="nav-link" exact activeClassName="current" to='/about'>
        <span class="link-text logo-text">{props.title}</span>
        {props.icon}
      </NavLink>
    </li>
  );

}

function NavThemify(props) {

  return (
    <li className="nav-item" id="themeButton">
      <a href="#" className="nav-link">
        {props.icon}
        <span class="link-text">{props.category}</span>
      </a>
    </li>
  );
}


const Main = () => (
  <main id="component">
    <Switch>
      <Route exact path='/about' component={Home}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/resume' component={Resume}></Route>
    </Switch>
  </main>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Projects = () => (
  <div className='projects'>
    <h1>Projects</h1>
    <h2>Coming Soon...</h2>
  </div>
);

const Resume = () => (
  <div className='resume'>
    <h1>Resume</h1>
    <h2>PDF Link: </h2>
    <h3>Coming Soon...</h3>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact</h1>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/alan-xia-se/"><strong>https://www.linkedin.com/in/alan-xia-se/</strong></a></p>
    <p>Github: <a href="https://github.com/xalanth"><strong>github.com/xalanth</strong></a></p>
    <p>Email: <strong>xialan2917 at gmail.com</strong></p>
  </div>
);


export default App;
