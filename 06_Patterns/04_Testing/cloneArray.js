// const arreglo = [1, 2, 3];

function cloneArray(array) {
    // FORMA 1: CON CICLO FOR
    // let clone = [];
    // for (let i = 0; i < array.length; i++){
    //    clone.push(array[i]);
    // }
    // return clone;

    // FORMA 2: CON MÉTODO MAP    
    // return clone = array.map(elemento => elemento);
    
    // FORMA 3: CON SPREAD OPERATOR
    return [...array];

}

module.exports = cloneArray;