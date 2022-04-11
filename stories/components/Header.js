import '../styles/style.css';

export const createHeader = ({
    text,
}) => {
    const header = document.createElement('h1')
    header.innerText = text

    return header;
}