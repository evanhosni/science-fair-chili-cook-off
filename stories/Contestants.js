import { createHeader } from './components/Header';
import { createCard } from './components/Card';
import './styles/style.css';

//import images
import spoons from './images/spoons.png'
import chili1 from './images/chili1.png'
import chili2 from './images/chili2.png'
import chili3 from './images/chili3.png'
import fetal_neurons from './images/fetal_neurons.gif'
import mitosis from './images/mitosis.gif'
import nanobots from './images/nanobots.gif'

export const createContestants = () => {
    const contestants = document.createElement('section')
    contestants.id = 'contestants'
    contestants.className = 'parallax-bg'
    contestants.appendChild(createHeader({ text: 'Contestants' }))

    const content = document.createElement('div')
    content.appendChild(createCard({ imgSrc: chili1, imgAlt: 'chili', gifSrc: nanobots, gifAlt: 'nanobots', text: "Nanobot technology sure has come a long way. This synthetic chili taps into your hippocampus to retrieve all those nostalgic memories..." }))
    content.appendChild(createCard({ imgSrc: chili2, imgAlt: 'chili', gifSrc: mitosis, gifAlt: 'mitosis', text: "Contestant #2 chose to use only the freshest, wholest of ingredients. We're talking pre-cell division stuff. Talk about organic!" }))
    content.appendChild(createCard({ imgSrc: chili3, imgAlt: 'chili', gifSrc: fetal_neurons, gifAlt: 'fetal neurons', text: "A new twist on GMOs, this chili blah blah blah. Anyways take a bite and let me know what you think." }))

    contestants.appendChild(content)

    contestants.style.backgroundImage = `url(${spoons})`
    contestants.style.backgroundAttachment = 'fixed'

    return contestants;
}