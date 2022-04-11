import './styles/style.css';
import { createNavlink } from './components/Navlink';

export const createNavbar = () => {
    const navbar = document.createElement('nav')
    // nav.id = 'navbar'not sure if id is the right one
    navbar.appendChild(createNavlink({ text: 'About' }))
    navbar.appendChild(createNavlink({ text: 'Contestants' }))
    navbar.appendChild(createNavlink({ text: 'RSVP' }))

    return navbar
}