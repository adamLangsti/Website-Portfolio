import React from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Data from './Data';
import Logo from './img/tinified.png';
import Myli from './img/myliApp.png';

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
          <Fade>
            <ul id="header">
              <li>
                <Link
                  onClick={this.scrollToTop}
                  activeClass='active'
                  className='links'
                  to='home'
                  spy={true}
                  smooth={true}
                  duration={800}>Home</Link></li>

              <li>
                <Link
                  activeClass='active'
                  className='links'
                  to='aboutContainer'
                  spy={true}
                  smooth={true}
                  duration={800}>About</Link></li>

              <li>
                <Link
                  activeClass='active'
                  className='links'
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1500}>Contact</Link></li>
            </ul>
          </Fade>

        </nav>

        <div className='headLine'>
          <Fade>
            <h1>Adam Lang.</h1>
            <h2>System developer with focus on mobile units.</h2>
            <h2>Sweden.</h2>
          </Fade>
        </div>

        <div id='aboutContainer'>
          <div className='aboutMeDiv'>
            <Fade>
              <h3 className='aboutMe'>About me.</h3>
              <p className='about'>
                {Data.about}
              </p>
            </Fade>
          </div>
        </div>

        <div id='projectsContainer'>
          <div className='myProjectsDiv'>
            <Fade>
              <h3 className='aboutProject'>Experience as an intern.</h3>
              <p className='myProjects'>
                {Data.myProjects}
              </p>
            </Fade>
          </div>
        </div>

        <div className='imageDiv'>
          <Fade>
            <img className='Logo' src={Logo} alt='Unsplash' />
            <img className='Myli' src={Myli} alt='myliApp' />
            <p className='homepageDescription'>{Data.homepage}</p>
            <p className='splashDescription'>{Data.splash}</p>
          </Fade>
        </div>

        <div className='myliInfo'>
          <Fade>
            <h4 className='myliInfo1'>{Data.myli}</h4>
          </Fade>
        </div>

        <div className='myliWebsiteLink'>
          <Fade>
            <a href='http://www.myli.se/' target='blank'> www.myli.se</a>
          </Fade>
        </div>

        <div className='contactMeDiv'>
          <Fade>
            <h3 className='contactMe'>Contact information:</h3>
            <p className='contact'>
              {Data.contact}
            </p>
          </Fade>
        </div>

      </div>
    );
  }
}

export default Portfolio;
