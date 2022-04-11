import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createRSVP = () => {
    const rsvp = document.createElement('section')
    rsvp.id = 'rsvp'
    rsvp.appendChild(createHeader({ text: 'RSVP' }))

    return rsvp;
}