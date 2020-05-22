import validador from 'validator';

class FormValidator {

    constructor(validacoes){
        this.validacoes = validacoes;
    }

    valida(state) { // método que itera pelo array de regras de validação e constroi um objeto validação e o retorna

        let validacao = this.valido(); // começa assuindo que está tudo válido e recebe o objeto do método valido

        this.validacoes.forEach(regra => {
            
            const campoValor = state[regra.campo.toString()];
            const args = regra.args || [];
            const metodoValidacao =  typeof regra.metodo === 'string' ?
                validador[regra.metodo] : regra.metodo

            if(metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
                validacao[regra.campo] = {
                    isInvalid: true, 
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }

        });
        return validacao;

    }

    valido() {
        const validacao = {}; // criação do objeto que será retornado ao final do método
        this.validacoes.map(regra => ( // populando o objeto de acordo com a quantidade de campos
            validacao[regra.campo] = {isInvalid: false, message: ''} // criando a chave isInvalid e atribuindo false para cada campo (TODOS OS CAMPOS COMEÇAM VÁLIDOS)
        ));

        return {isValid: true, ...validacao}; // retorna um grande objeto com uma chave externa isValid junto com todos os outros campos
    }
}

export default FormValidator;