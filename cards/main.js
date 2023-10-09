const deckGenerate = () => {
    const stick = ["♠️","♣️","♦️","♥️"];
    const value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
 
    let deck = [];
    for (let i of stick){
        for (let k=0; k < value.length; k++){
            const obj = {
                stick: i,
                value: value[k],
                num: k,
            }
        deck.push(obj);

        }
    }
return deck;
};

const deck = deckGenerate();
const randomCard = deck[Math.floor(Math.random()*deck.length)];
// const randcomCardValue = randomCard.value;
// const randomCardStick = randomCard.stick;

const firsthandleForm = () => {
    const dom = document;

    const pElement = dom.querySelector('h3')

    const handleForm = () => {
        
        pElement.innerHTML = 
        `${randomCard.value} ${randomCard.stick}`;
        // const text = document.querySelector('.card')
        // text.textContent =`${randomCard.value} ${randomCard.stick}` ;

        event.preventDefault();
    };
        
        const boton = document.querySelector('.next');
        boton.addEventListener("click",handleForm);
    };

const sendGame = () => {
    console.dir(document);
};


firsthandleForm();
