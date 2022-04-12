import '../styles/style.css';
import { createHeader } from './Header';
import { createParagraph } from './Paragraph';

export const createCard = ({
    imgSrc,
    imgAlt,
    gifSrc,
    gifAlt,//TODO: figure out how to include alt on background elements
    header,
    paragraph,
}) => {
    const card = document.createElement('div')
    card.className = 'card'

    const image = document.createElement('img')
    image.src = imgSrc
    image.alt = imgAlt

    const container = document.createElement('div')
    container.className = 'magnifiable'

    container.appendChild(image)
    card.appendChild(container)
    card.appendChild(createHeader({text: header, primary: false}))
    card.appendChild(createParagraph({ text: paragraph }));

    image.addEventListener('mouseover', () => {
        //remove old/duplicate microscopes
        deleteMicroscope()

        var glass, w, h, borderWidth;
        var zoom = 2;

        
        //create microscope
        glass = document.createElement('div');
        glass.className = 'microscope';
        image.parentElement.insertBefore(glass, image);

        //set microscope background to gifSrc
        glass.style.backgroundImage = `url('${gifSrc}')`;
        glass.style.backgroundRepeat = 'no-repeat';
        glass.style.backgroundSize = (image.width * zoom) + 'px ' + (image.height * zoom) + 'px';
        borderWidth = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        //call moveMicroscope on mousemove
        glass.addEventListener('mousemove', moveMicroscope);
        image.addEventListener('mousemove', moveMicroscope);
        //call moveMicroscope on touchmove (for touchscreen compatability)
        glass.addEventListener('touchmove', moveMicroscope);
        image.addEventListener('touchmove', moveMicroscope);

        function moveMicroscope(e) {
            e.preventDefault();

            var x, y;

            //get cursor coordinates
            x = getCursorPos(e).x;
            y = getCursorPos(e).y;

            //prevent microscope from leaving magnifiable image bounds
            if (x > image.width - (w / zoom)) {x = image.width - (w / zoom);}
            if (x < w / zoom) {x = w / zoom;}
            if (y > image.height - (h / zoom)) {y = image.height - (h / zoom);}
            if (y < h / zoom) {y = h / zoom;}

            //set microscope position
            glass.style.left = (x - w) + 'px';
            glass.style.top = (y - h) + 'px';

            //display background image in microscope
            glass.style.backgroundPosition = '-' + ((x * zoom) - w + borderWidth) + 'px -' + ((y * zoom) - h + borderWidth) + 'px';
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            a = image.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }

        function deleteMicroscope() {
            var microscopes = document.querySelectorAll('.microscope')
            for (let i = 0; i < microscopes.length; i++) {
                microscopes[i].remove()
            }
        }

        //delete microscope when cursor leaves magnifiable area
        glass.addEventListener('mouseleave', () => {
            deleteMicroscope()
        })
    })

    return card;
}