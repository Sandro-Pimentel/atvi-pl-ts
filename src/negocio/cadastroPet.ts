import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet implements Cadastro {
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        this.pets = pets
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe o raça do pet: `)
        let gen = this.entrada.receberTexto(`Por favor informe o gênero do pet: `)
        let donoCpf: string;
        let achou = false;
        let dono = new Cliente('1','1', new CPF('1', new Date()));

        do {
            donoCpf = this.entrada.receberTexto(`Por favor informe o cpf do dono: `)
            this.clientes.forEach((cliente) => {
                //console.log(cliente.getCpf.getValor)
                if(cliente.getCpf.getValor == donoCpf) {
                    dono = cliente
                    achou = true
                }
            })
        } while(!achou)
        
        let pet = new Pet(nome, raca, gen, tipo, dono.getCpf)
        dono.addPet(pet)
        this.pets.push(pet)
        console.log(`\nCadastro concluído!\n`)
    }
}