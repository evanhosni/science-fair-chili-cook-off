import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createRSVP = () => {
    const rsvp = document.createElement('section')
    rsvp.id = 'rsvp'
    rsvp.appendChild(createHeader({ text: 'RSVP' }))

    const content = document.createElement('div')
    content.appendChild(createParagraph({ text:
        "the 50th annual blah blah blah where contestants blah blah"
    }))

    rsvp.appendChild(content)

    return rsvp;
}