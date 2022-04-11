//import style
import './styles/style.css';

//import components
import { createNavbar } from './Navbar';
import { createTitle } from './Title';
import { createAbout } from './About';
import { createContestants } from './Contestants';
import { createRSVP } from './RSVP';
import { createFooter } from './Footer';

export const createPage = () => {
    const page = document.createElement('body')//TODO: probably shouldnt create body like this...append to root instead?
    page.appendChild(createNavbar())
    page.appendChild(createTitle())
    page.appendChild(createAbout())
    page.appendChild(createContestants())
    page.appendChild(createRSVP())
    page.appendChild(createFooter())

    return page
}