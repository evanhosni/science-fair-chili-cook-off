import './styles/style.css';
import { createNavlink } from './components/Navlink';

export const createNavbar = () => {
    const navbar = document.createElement('nav')
    navbar.appendChild(createNavlink({ text: 'SFCCO', href: '#top' })) //TODO: use image instead, separate to left and justify content space around
    navbar.appendChild(createNavlink({ text: 'About', href: '#about' }))
    navbar.appendChild(createNavlink({ text: 'Contestants', href: '#contestants' }))
    navbar.appendChild(createNavlink({ text: 'RSVP', href: '#rsvp' }))

    return navbar
}