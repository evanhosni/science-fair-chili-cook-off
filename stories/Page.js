import './styles/style.css';
import { createNavbar } from './Navbar';
import { createTitle } from './Title';
import { createAbout } from './About';
import { createParallaxBackground } from './components/ParallaxBackground';
import { createContestants } from './Contestants';
import { createRSVP } from './RSVP';
import { createFooter } from './Footer';

export const createPage = () => {
    const page = document.createElement('body')//TODO: probably shouldnt create body like this...append to root instead?
    page.appendChild(createNavbar())
    page.appendChild(createTitle())
    page.appendChild(createParallaxBackground({ imageUrl: 'http://placekitten.com/200/300', parallaxIntensity: 0.7 }))
    page.appendChild(createAbout())
    page.appendChild(createParallaxBackground({ imageUrl: 'http://placekitten.com/200/300', parallaxIntensity: 0.7 }))
    page.appendChild(createContestants())
    page.appendChild(createParallaxBackground({ imageUrl: 'http://placekitten.com/200/300', parallaxIntensity: 0.7 }))
    page.appendChild(createRSVP())
    page.appendChild(createFooter())

    return page
}