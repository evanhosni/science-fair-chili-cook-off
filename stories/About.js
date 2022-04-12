import { createHeader } from './components/Header';
import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createAbout = () => {
    const about = document.createElement('section')
    about.id = 'about'
    about.appendChild(createHeader({ text: 'About' }))
    
    const content = document.createElement('div')
    
    const video = document.createElement('div')
    video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/rPimn229Ezg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    
    content.appendChild(createParagraph({ text:
        "lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce lorem bingus waffle fries and hummus and anyways check me out my name pierce "
    }))
    content.appendChild(video)
    
    about.appendChild(content)

    return about;
}