/*const ele1 = document.querySelector(".container");
ele1.remove();*/

function know(){
const para = document.querySelector(".line");
para.remove();
const buttonele = document.querySelector(".btn");
buttonele.remove();   

const ele = document.querySelector(".container");

const about = ["sweet","cute", "handsome", "smart", "genius", "brilliant","my lover","sexy", "bold","beaytiful","caring","protective","my man","my peace","loving","strong","my teacher","patient","tolerating me since 2022", "extraordinary", "excellent", "amazing","my everything!"];

let index = 0;

let charIndex = 0;

update();

function update(){
    charIndex++;
    ele.innerHTML = `
 <h1>Chiko is ${about[index].slice(0,charIndex)}</h1>

`;
 if(charIndex === about[index].length){
    index++;
    charIndex = 0;
 }
 setTimeout(update, 150);
}
    createShapes();

}

function createShapes(){
    const shapes = ['heart','flower','star'];
    const images = {
        heart: 'https://cdn0.iconfinder.com/data/icons/twitter-24/512/166_Heart_Love_Like_Twitter-64.png',
        flower: "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rose-64.png",
        star: "https://cdn4.iconfinder.com/data/icons/celestial-and-witchcraft/500/decoration_star_shiny_bright_sparkle_shine_light_stars_glitter_sky-64.png"
    };
    setInterval(() => {
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const shape = document.createElement('img');
        shape.src = images[shapeType];
        shape.classList.add('shape');
        shape.style.left = Math.random() * 100 + 'vw';
        shape.style.animationDuration = Math.random() * 5 + 5 + 's';
        shape.style.width = Math.random() * 30 + 20 + 'px';
        shape.style.height = shape.style.width;
        document.body.appendChild(shape);
        setTimeout(() => {
            shape.remove();
        }, 20000);
    }, 300);
}

