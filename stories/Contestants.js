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
    content.appendChild(createCard({ imgSrc: chili1, imgAlt: 'chili', gifSrc: nanobots, gifAlt: 'nanobots', header: 'Chili Con Nanobot', paragraph: "Nanobot technology sure has come a long way. This synthetic chili introduces your body to thousands of microscopic robots programmed to travel straight to your brain and resurface all of your nostalgic memories of grandma's homemade chili." }))
    content.appendChild(createCard({ imgSrc: chili2, imgAlt: 'chili', gifSrc: mitosis, gifAlt: 'mitosis', header: 'Mitosis Gumbo', paragraph: "Inspired by the beginning of all life, this dish begins with the wholest of ingredients: the amoeba. Be patient as a single cell divides into a full bowl of chili right in front of your eyes. Talk about organic!" }))
    content.appendChild(createCard({ imgSrc: chili3, imgAlt: 'chili', gifSrc: fetal_neurons, gifAlt: 'fetal neurons', header: 'Vegetarian Psuedoscience', paragraph: "Craving something a little different? This placebic chili cures all ailments and makes you stronger. It has cancer-fighting properties and I'm pretty sure it increases your IQ. If it makes you sick that means it's working. Trust me." }))

    contestants.appendChild(content)

    contestants.style.backgroundImage = `url(${spoons})`
    contestants.style.backgroundAttachment = 'fixed'

    return contestants;
}