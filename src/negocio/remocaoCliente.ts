import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Remocao from "./remocao";

export default class RemocaoCliente implements Remocao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    apagar(): void {
        console.log("\nInício da remoção de cliente")
        let cpf =  this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        let removido;
        this.clientes.forEach((e, i) => {
            if(e.getCpf.getValor == cpf) {
                removido = this.clientes.splice(i, 1)
            } 
        })
        if((typeof(removido)).length < 10){
            console.log("Cliente deletado com sucesso!")
            console.log('\n')
        } 
    }
}