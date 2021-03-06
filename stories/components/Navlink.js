import '../styles/style.css';

export const createNavlink = ({
    text,
    href,
    inNavbar = true,
}) => {
    const navlink = document.createElement('a');
    navlink.innerText = text;
    navlink.href = href;
    navlink.target = inNavbar? '' : '_blank'
    const mode = inNavbar? 'navlink--navbar' : 'navlink--footer';
    navlink.className = ['navlink', mode].join(' ');

    return navlink;
}