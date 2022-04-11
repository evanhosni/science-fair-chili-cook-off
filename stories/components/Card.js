import '../styles/style.css';
import { createParagraph } from './Paragraph';

export const createCard = ({
    imgSrc,
    imgAlt,
    text,
}) => {
    const card = document.createElement('div')
    card.className = 'card'

    const image = document.createElement('img')
    image.src = imgSrc
    image.alt = imgAlt

    const container = document.createElement('div')
    container.className = 'magnifiable'

    image.addEventListener('mouseover', () => {
        var microscopes = document.querySelectorAll('.microscope')
        for (let i = 0; i < microscopes.length; i++) {
            microscopes[i].remove()
        }
        var glass, w, h, bw;
        let zoom = 5;
        /*create magnifier glass:*/
        glass = document.createElement("div");
        glass.setAttribute("class", "microscope");
        /*insert magnifier glass:*/
        image.parentElement.insertBefore(glass, image);
        /*set background properties for the magnifier glass:*/
        glass.style.backgroundImage = "url('http://placekitten.com/2000/2000')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (image.width * zoom) + "px " + (image.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener("mousemove", moveMagnifier);
        image.addEventListener("mousemove", moveMagnifier);
        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        image.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
          var pos, x, y;
          /*prevent any other actions that may occur when moving over the image*/
          e.preventDefault();
          /*get the cursor's x and y positions:*/
          pos = getCursorPos(e);
          x = pos.x;
          y = pos.y;
          /*prevent the magnifier glass from being positioned outside the image:*/
          if (x > image.width - (w / zoom)) {x = image.width - (w / zoom);}
          if (x < w / zoom) {x = w / zoom;}
          if (y > image.height - (h / zoom)) {y = image.height - (h / zoom);}
          if (y < h / zoom) {y = h / zoom;}
          /*set the position of the magnifier glass:*/
          glass.style.left = (x - w) + "px";
          glass.style.top = (y - h) + "px";
          /*display what the magnifier glass "sees":*/
          glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
        function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          /*get the x and y positions of the image:*/
          a = image.getBoundingClientRect();
          /*calculate the cursor's x and y coordinates, relative to the image:*/
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return {x : x, y : y};
        }
    })

    image.addEventListener('mouseleave', (e) => { //TODO: glitchy
        // console.log(e.target)
        // var microscopes = document.querySelectorAll('.microscope')
        // for (let i = 0; i < microscopes.length; i++) {
        //     microscopes[i].remove()
        // }
    })

    container.appendChild(image)
    card.appendChild(container)
    card.appendChild(createParagraph({ text: text }));

    return card;
}