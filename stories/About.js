import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

import chef from './images/chef.png'

export const createAbout = () => {
    const about = document.createElement('section')
    about.id = 'about'
    about.appendChild(createHeader({ text: 'About' }))
    
    const content = document.createElement('div')
    
    const img = document.createElement('img')
    img.src = chef
    img.alt = 'chef/scientist'
    
    content.appendChild(createParagraph({ text:
        "lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce "
    }))
    content.appendChild(img)
    
    about.appendChild(content)

    return about;
}