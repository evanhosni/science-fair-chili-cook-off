import '../styles/style.css';

export const createButton = ({
    text,
}) => {
    const Button = document.createElement('button')
    Button.innerText = text

    return Button;
}