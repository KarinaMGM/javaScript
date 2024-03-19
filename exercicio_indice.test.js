var { maiorIndice, menorIndice, numeros } = require('./exercicio_indice')

describe('Funções Matemáticas', () => {
    it('Validar o indice de maior e menor valor', () => {
        expect(maiorIndice = Math.max.apply(null, numeros ))
        expect(menorIndice = Math.min.apply(null, numeros ))
    });
});