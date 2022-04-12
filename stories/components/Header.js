import '../styles/style.css';

export const createHeader = ({
    text,
    primary = true,

}) => {
    var header

    if (primary) {
        header = document.createElement('h1')
    } else {
        header = document.createElement('h2')
    }
    
    header.innerText = text

    return header;
}