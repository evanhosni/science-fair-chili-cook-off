import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createAbout = () => {
    const about = document.createElement('section')
    about.id = 'about'
    about.appendChild(createHeader({ text: 'About' }))
    about.appendChild(createParagraph({ text:
        "the 50th annual blah blah blah where contestants blah blah"
    }))

    return about;
}