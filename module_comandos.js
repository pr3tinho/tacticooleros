/************************************************************************************************************************
 * ARRAY RISAS
 ************************************************************************************************************************/
const risasObject = {
    'je je': 'Muy buena je je.',
    'jeje': 'je je.',
    'ja ja': '',
    'jaja' : '',
    'jojo' : '',
    'jo jo': ''
};

const hello = (name) => {
    return `Hello, ${name}, welcome to this world!`;
}
const responseRisas = (risa) => {
    if(risasObject.some(word => message.content.includes(word))) {        
        //var x = Math.floor((Math.random() * 6) + 1);
        return `word: ${ word }`;
    }    
}

const message = responseRisas("je je");
console.log(message);











module.exports = (name) => {
 return `Hello, ${name}, to this world!`;
}

