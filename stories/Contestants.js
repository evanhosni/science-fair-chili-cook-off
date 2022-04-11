import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

//import images
import spoons from './images/spoons.png'

export const createContestants = () => {
    const contestants = document.createElement('section')
    contestants.id = 'contestants'
    contestants.className = 'parallax-bg'
    contestants.appendChild(createHeader({ text: 'Contestants' }))

    const content = document.createElement('div')
    content.appendChild(createParagraph({ text:
        "the 50th annual blah blah blah where contestants blah blah"
    }))

    contestants.appendChild(content)

    contestants.style.backgroundImage = `url(${spoons})`
    contestants.style.backgroundAttachment = 'fixed'

    return contestants;
}