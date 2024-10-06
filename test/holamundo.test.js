import holaMundo from '../index';

test('Devuelve Hola Mundo', () => {
    expect(holaMundo()).toBe("Hola Mundo!");
});