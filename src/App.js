import React from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';

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
                to='about'
                spy={true}
                smooth={true}
                duration={800}>About</Link></li>

              <li><Link
                activeClass='active'
                className='links'
                to='contact'
                spy={true}
                duration={800}>Contact</Link></li>
            </ul>
          </Fade>
        </nav>

        <div className='headLine'>
          <Fade left>
            <h1>Adam Lang.</h1>
            <h2>Mobile app developer.</h2>
            <h2>Sweden.</h2>
          </Fade>
        </div>

      </div>
    );
  }
}

export default Portfolio;
