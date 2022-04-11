import { createNavlink } from './components/Navlink';
import './styles/style.css';

export const createFooter = () => {
    const footer = document.createElement('footer')
    footer.id = 'footer'
    footer.appendChild(createNavlink({ text: 'Github', href: 'https://github.com/evanhosni/science-fair-chili-cook-off', inNavbar: false }))

    return footer;
}