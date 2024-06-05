import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class AtualizacaoServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\nInício da atualização de serviço`)
        let cod = this.entrada.receberTexto(`Por favor informe o codigo do serviço que deseja atualizar: `)
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `)
        let atualizado: Servico[] = [];
        this.servicos.forEach((servico, index) => {
            if(servico.codigo == cod) {
                atualizado = this.servicos.splice(index, 1, new Servico(cod, nome, preco))
            }
        })
        if(atualizado.length > 0){
            console.log("Serviço atualizado com sucesso!")
            console.log('\n')
        }
    }
}