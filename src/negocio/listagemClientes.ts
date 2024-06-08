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
                if(pet.getProdutosConsumidos.length > 0){
                    console.log(`Produtos consumidos: `)
                    pet.getProdutosConsumidos.forEach(produto => {
                        console.log(`Código: ${produto.codigo} - Nome: ${produto.nome} - Preço: ${produto.preco}`)
                    })
                }
                if(pet.getServicosConsumidos.length > 0){
                    console.log(`Serviços consumidos: `)
                    pet.getServicosConsumidos.forEach(servico => {
                        console.log(`Código: ${servico.codigo} - Nome: ${servico.nome} - Preço: ${servico.preco}`)
                    })
                }
                console.log(`--------------------------------------`);
            })
        });
        console.log(`\n`);
    }
}