import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createContestants = () => {
    const contestants = document.createElement('section')
    contestants.id = 'contestants'
    contestants.appendChild(createHeader({ text: 'Contestants' }))

    return contestants;
}