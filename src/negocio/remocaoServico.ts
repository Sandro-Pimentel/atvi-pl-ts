import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Remocao from "./remocao";

export default class RemocaoServico implements Remocao{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    apagar(): void {
        console.log("\nInício da remoção de serviço")
        let cod =  this.entrada.receberTexto(`Por favor informe o codigo do serviço: `)
        let removido;
        this.servicos.forEach((e, i) => {
            if(e.codigo == cod) {
                removido = this.servicos.splice(i, 1)
            } 
        })
        if((typeof(removido)).length < 10){
            console.log("Serviço deletado com sucesso!")
            console.log('\n')
        }
    }
}