import '../styles/style.css';

export const createHeader = ({
    text,
}) => {
    const header = document.createElement('h2')
    header.innerText = text

    return header;
}