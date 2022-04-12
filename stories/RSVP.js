import { createHeader } from './components/Header';
// import { createParagraph } from './components/Paragraph';
import './styles/style.css';

export const createRSVP = () => {
    const rsvp = document.createElement('section')
    rsvp.id = 'rsvp'
    rsvp.appendChild(createHeader({ text: 'RSVP' }))

    const content = document.createElement('div')
    const form = document.createElement('div')
    form.id = 'form'
    form.innerHTML = `<form action="/action_page.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
    </form>`

    const map = document.createElement('div')
    map.id = 'map'

    content.appendChild(form)
    content.appendChild(map)
    rsvp.appendChild(content)

    return rsvp;
}