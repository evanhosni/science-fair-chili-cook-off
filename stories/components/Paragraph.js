import '../styles/style.css';

export const createParagraph = ({
    text,
}) => {
    const paragraph = document.createElement('p')
    paragraph.innerText = text

    return paragraph;
}