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
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            let data = cliente.getCpf.getDataEmissao
            console.log(`CPF: ${cliente.getCpf.getValor} - ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);
            console.log(`RGs:\n`);
            {cliente.getRgs.forEach(rg => {
                let data = rg.getDataEmissao
                console.log(`\nCpf: ${rg.getValor}\nData Emissão: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}\n\n`)
            })}
            console.log(`Telefones: ${cliente.getTelefones}`);
            console.log(`Pets: ${cliente.getPets}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}