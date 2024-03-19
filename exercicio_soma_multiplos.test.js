const { multiplos7, multiplos5 } = require('./exercicio_soma_multiplos')

describe('Funções Matemáticas', () => {
    
    it('Validar a soma dos multiplos de dois valores', () => {
        expect("Somatórios dos Múltiplos de 5 e 7: " + parseInt(multiplos7+multiplos5))
    });
});

