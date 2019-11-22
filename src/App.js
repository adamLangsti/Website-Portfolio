import React from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Data from './Data';
import Logo from './img/tinified.png';

class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo(offset) {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Fade right>
            <ul>
              <li><Link
                activeClass='active'
                className='links'
                to='home'
                spy={true}
                smooth={true}
                duration={800}>Home</Link></li>

              <li><Link
                activeClass='active'
                className='links'
                to='aboutMe'
                spy={true}
                smooth={true}
                duration={800}>About</Link></li>

              <li><Link
                activeClass='active'
                className='links'
                to='contact'
                spy={true}
                smooth={true}
                duration={800}>Contact</Link></li>
            </ul>
          </Fade>
        </nav>

        <div className='headLine'>
          <Fade left>
            <h1>Adam Lang.</h1>
            <h2>System developer with focus on mobile units.</h2>
            <h2>Sweden.</h2>
          </Fade>
        </div>


        <div className='aboutMeDiv'>
          <h3 className='aboutMe'>About me.</h3>
          <p className='about'>
            {Data.about}
          </p>
        </div>

        <div className='myProjectsDiv'>
          <h3 className='aboutProject'>Working experience.</h3>
          <p className='myProjects'>
            {Data.myProjects}
          </p>
          <div className='imageDiv'>
            <img className='myliImage' src={Logo} alt='Unsplash' />
          </div>
        </div>

        <div className='contactMeDiv'>
          <h3 className='contactMe'>Contact information:</h3>
          <p className='contact'>
            {Data.contact}
          </p>
        </div>

      </div>
    );
  }
}

export default Portfolio;
