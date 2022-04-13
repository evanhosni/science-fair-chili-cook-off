import './styles/style.css';
import { createNavlink } from './components/Navlink';

export const createNavbar = () => {
    const navbar = document.createElement('nav')
    navbar.appendChild(createNavlink({ text: 'HOME', href: '#top' })) //TODO: use image instead, separate to left and justify content space around
    navbar.appendChild(createNavlink({ text: 'ABOUT', href: '#about' }))
    navbar.appendChild(createNavlink({ text: 'CONTESTANTS', href: '#contestants' }))
    navbar.appendChild(createNavlink({ text: 'RSVP', href: '#rsvp' }))


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
            navbar.style.backgroundColor = "rgb(116, 47, 45)";
            navbar.style.boxShadow = "black 0 0 25px"
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none"
        }
    })

    return navbar
}