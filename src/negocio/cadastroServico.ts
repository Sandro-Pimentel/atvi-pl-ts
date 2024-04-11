import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class CadastroServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log("Inicio do cadastro de servico");
        let codservico = this.entrada.receberTexto("Digite o código do servico: ");
        let nomeservico = this.entrada.receberTexto("Digite o nome do servico: ");
        let precoservico = this.entrada.receberNumero("Digite o preço do servico: ");
        let servico = new Servico(codservico, nomeservico, precoservico);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído!\n`)
    }
}