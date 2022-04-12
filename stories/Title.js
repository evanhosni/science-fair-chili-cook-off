import './styles/style.css';

//import images
import sfcco_logo from './images/sfcco_logo.png'
import banner1 from './images/banner1.png'
import banner2 from './images/banner2.png'


export const createTitle = () => {
    const title = document.createElement('header')
    title.id = 'title'
    title.className = 'parallax-bg'

    const logo = document.createElement('img')
    logo.src = sfcco_logo
    logo.alt = 'chili pot with bubbles logo'
    logo.id = "logo"

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Science Fair<br><span id="title-chili">Chili</span><br>Cook-Off'

    const h3 = document.createElement('h3')
    h3.innerText = '2022'

    const titleContainer = document.createElement('div')
    titleContainer.appendChild(logo)
    titleContainer.appendChild(h1)
    titleContainer.appendChild(h3)
    title.appendChild(titleContainer)

    const slideshow = [banner1, banner2]
    title.style.backgroundImage = `url(${slideshow[0]})`
    let index = 0
    setInterval(() => {
        index >= slideshow.length -1 ? index = 0 : index++
        title.style.backgroundImage = `url(${slideshow[index]})`
    },5000)

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        title.style.backgroundPositionY = offset * 0.6 + 'px';
        titleContainer.style.paddingTop = 18 + offset * 0.04 + 'vh';
    })

    return title
}