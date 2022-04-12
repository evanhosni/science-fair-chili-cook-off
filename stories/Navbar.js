import './styles/style.css';
import { createNavlink } from './components/Navlink';

export const createNavbar = () => {
    const navbar = document.createElement('nav')
    navbar.appendChild(createNavlink({ text: 'HOME', href: '#top' })) //TODO: use image instead, separate to left and justify content space around
    navbar.appendChild(createNavlink({ text: 'ABOUT', href: '#about' }))
    navbar.appendChild(createNavlink({ text: 'CONTESTANTS', href: '#contestants' }))
    navbar.appendChild(createNavlink({ text: 'RSVP', href: '#rsvp' }))

    return navbar
}