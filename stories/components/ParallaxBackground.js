import '../styles/style.css';

export const createParallaxBackground = ({
    imageUrl,
    parallaxIntensity,
}) => {
    const parallaxbackground = document.createElement('div');
    parallaxbackground.className = 'parallax-image';
    parallaxbackground.style.backgroundImage = `url(${imageUrl})`;

    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        parallaxbackground.style.backgroundPositionY = offset * parallaxIntensity + 'px';
    })

    return parallaxbackground;
}