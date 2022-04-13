import '../styles/style.css';

export const createInput = ({
    id = 'inputField',
    labelText = 'Input Field',
    placeholder = '',
    includeLabel = true,

}) => {
    const label = document.createElement('label')
    label.setAttribute("for",id)
    label.innerText = labelText
    
    const input = document.createElement('input')
    input.type = 'text'
    input.id = id
    input.placeholder = placeholder
    
    const container = document.createElement('div')
    container.appendChild(label)
    container.appendChild(input)

    if (includeLabel) {
        return container;
    }
    return input
}