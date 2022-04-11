import './styles/style.css';

//import images
import spudcat from './images/spudcat.jpg'
import spoons from './images/spoons.png'


export const createTitle = () => {
    const title = document.createElement('header')
    title.id = 'title'
    title.className = 'parallax-bg'
    const h1 = document.createElement('h1')
    h1.innerText = "Science Fair Chili Cook-Off"
    const h3 = document.createElement('h3')
    h3.innerText = "2022"

    title.appendChild(h1)
    title.appendChild(h3)

    const slideshow = [spudcat, spoons]
    title.style.backgroundImage = `url(${slideshow[0]})`
    let index = 0
    setInterval(() => {
        index >= slideshow.length -1 ? index = 0 : index++
        title.style.backgroundImage = `url(${slideshow[index]})`
    },5000)

    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        title.style.backgroundPositionY = offset * 0.7 + 'px';
    })

    return title
}