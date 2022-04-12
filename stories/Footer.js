import { createNavlink } from './components/Navlink';
import './styles/style.css';

export const createFooter = () => {
    const footer = document.createElement('footer')
    footer.id = 'footer'
    
    footer.appendChild(createNavlink({ text: 'Github', href: 'https://github.com/evanhosni/science-fair-chili-cook-off', inNavbar: false }))
    footer.appendChild(createNavlink({ text: 'Portfolio', href: 'evanhosni.com', inNavbar: false }))
    footer.appendChild(createNavlink({ text: 'Contact', href: 'mailto:evankhaledhosni@gmail.com', inNavbar: false }))

    return footer;
}