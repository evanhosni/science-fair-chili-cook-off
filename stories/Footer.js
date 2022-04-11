import { createNavlink } from './components/Navlink';
import './styles/style.css';

export const createFooter = () => {
    const footer = document.createElement('section')
    footer.id = 'footer'
    footer.appendChild(createNavlink({ text: 'Github', href: 'bonky', inNavbar: false }))

    return footer;
}