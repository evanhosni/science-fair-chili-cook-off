import './styles/style.css';

export const createTitle = () => {
    const title = document.createElement('header')
    title.id = 'title'
    const h1 = document.createElement('h1')
    h1.innerText = "Science Fair Chili Cook-Off"
    const h3 = document.createElement('h3')
    h3.innerText = "2022"

    title.appendChild(h1)
    title.appendChild(h3)

    return title
}