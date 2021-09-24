const substract = require('../substract');

test('Resta 2 - 1 y el resultado debe ser 1', () => {
    expect( substract(2, 1) ).toBe(1); //expect es la funcionalidad que espera a que el resultado de tal cosa (realice tal acción)
});
