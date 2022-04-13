import { createButton } from './components/Button';
import { createHeader } from './components/Header';
import { createInput } from './components/Input';
import './styles/style.css';

export const createRSVP = () => {
    const rsvp = document.createElement('section')
    rsvp.id = 'rsvp'

    const formContainer = document.createElement('div')
    formContainer.id = "form"

    const form = document.createElement('form')    
    form.appendChild(createInput({ id: 'name', labelText: 'Name:' }))
    form.appendChild(createInput({ id: 'email', labelText: 'Email:' }))

    formContainer.appendChild(createHeader({ text: 'RSVP' }))
    formContainer.appendChild(form)
    formContainer.appendChild(createButton({ text: 'Submit' }))

    const mapContainer = document.createElement('div')
    mapContainer.id = 'map'
    mapContainer.innerHTML = `<iframe
        width="600"
        height="450"
        style="border:0; border-radius: 10px; box-shadow: black 0 0 25px"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Santiago,Chile">
    </iframe>`

    rsvp.appendChild(formContainer)
    rsvp.appendChild(mapContainer)

    return rsvp;
}