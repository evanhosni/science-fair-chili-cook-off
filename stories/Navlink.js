import './navlink.css'

export const createNavlink = ({
    label,
    href,
    inNavbar = true,
}) => {
    const navlink = document.createElement('a');
    navlink.innerText = label;
    navlink.href = href;

    const mode = inNavbar? 'navlink--navbar' : 'navlink--footer';
    navlink.className = ['navlink', mode].join(' ');

    return navlink;
}