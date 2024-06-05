import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            let data = cliente.getCpf.getEmissao
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor} - ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);
            console.log(`RGs:\n`);
            cliente.getRgs.forEach(rg => {
                let data = rg.getEmissao
                console.log(`\nCpf: ${rg.getValor}\nData Emissão: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}\n\n`);
            })
            console.log(`Telefones: \n`);
            cliente.getTelefones.forEach(tel => {
                console.log(`${tel.getDDD} ${tel.getNumero}`);
            })
            console.log(`Pets:\n`);
            cliente.getPets.forEach(pet => {
                console.log(`Nome: ${pet.getNome}`);
                console.log(`Gênero: ${pet.getGenero}`);
                console.log(`Raça: ${pet.getRaca}`);
                console.log(`Tipo: ${pet.getTipo}`);
                console.log(`--------------------------------------`);
            }) 
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}