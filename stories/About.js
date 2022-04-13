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
        `Welcome to the 25th annual Science Fair Chili Cook-Off! In this one-of-a-kind competition, scientists and chefs from around the world synthesize chili using cutting-edge technology and emperimental recipes that are sure to blow your mind.<br><br><span class='quote'>"Sometimes, making chili is more of a science than an art."</span><br><span class='author'>-Albert C.</span><br><br><span class='quote'>"Last year's fibonacci chili sure took my tastebuds for a spin!"</span><br><span class='author'>-Steven B.</span>`
    }))
    content.appendChild(video)
    
    about.appendChild(content)

    return about;
}