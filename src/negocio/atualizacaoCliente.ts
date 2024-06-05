import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente implements Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\nInício da atualização de cliente`)
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente que deseja atualizar: `)
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `)
        let verificaRg = this.entrada.receberNumero(`Qual ação deseja realizar com o rg (0 - Adicionar, 1 - Alterar): `)
        let vRg = this.entrada.receberTexto(`Por favor informe o novo rg do cliente: `)
        let dRg = this.entrada.receberTexto(`Por favor informe a nova data de emissão do rg do cliente no padrão dd/mm/yyyy: `)
        let verificaTel = this.entrada.receberNumero(`Qual ação deseja realizar com o telefone (0 - Adicionar, 1 - Alterar): `)
        let tel = this.entrada.receberTexto(`Por favor informe o novo telefone do cliente no padrão DDD-987654321: `)
        let telefone = tel.split('-')
        let ddd = telefone[0]
        let ntel = telefone[1]
        let dtEmissao = dRg.split('/')
        let dia = parseInt(dtEmissao[2])
        let mes = parseInt(dtEmissao[1])
        let ano = parseInt(dtEmissao[0])
        let atualizado: Cliente[] = [];
        this.clientes.forEach((e, i) => {
            if(e.getCpf.getValor == cpf) {
                let cliente = new Cliente(nome, nomeSocial, new CPF(cpf, e.getCpf.getEmissao))
                if(verificaRg == 0) {
                    cliente.addRg(new RG(vRg, new Date(dia, mes, ano)))
                } else {
                    console.log(`Qual RG deseja alterar?: `)
                    e.getRgs.forEach((rg, i) => {
                        console.log(`${i} - RG: ${rg.getValor} - Data Emissão: ${rg.getEmissao}`)
                    });
                    cliente.altRg(i-1, new RG(vRg, new Date(dia, mes, ano)))
                }

                if(verificaTel == 0) {
                    cliente.addTelefone(new Telefone(ddd, ntel))
                } else {
                    console.log(`Qual telefone deseja alterar?: `)
                    e.getTelefones.forEach((t, i) => {
                        console.log(`${i} - DDD: ${t.getDDD} - Número: ${t.getNumero}`)
                    });
                    cliente.altTelefone(i-1, new Telefone(ddd, ntel))
                }
                atualizado = this.clientes.splice(i, 1, cliente)
            }
        })
        if(atualizado.length > 0){
            console.log("Produto atualizado com sucesso!")
            console.log('\n')
        }
    }
}