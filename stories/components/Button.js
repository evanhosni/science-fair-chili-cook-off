import '../styles/style.css';

export const createButton = ({
    id,
    text,
}) => {
    const button = document.createElement('button')
    button.id = id
    button.innerText = text

    return button;
}