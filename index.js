class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de utilização da classe
const heroi1 = new Heroi('Herói1', 25, 'mago');
heroi1.atacar(); // Saída: O mago atacou usando magia

const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
heroi2.atacar(); // Saída: O guerreiro atacou usando espada

const heroi3 = new Heroi('Herói3', 35, 'monge');
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi('Herói4', 40, 'ninja');
heroi4.atacar(); // Saída: O ninja atacou usando shuriken