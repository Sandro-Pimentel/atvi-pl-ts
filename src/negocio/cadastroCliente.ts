import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valorC = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataC = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let valorR = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataR = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let telefone = this.entrada.receberTexto(`Por favor informe o número de telefone no padrão 12987654321: `)
        let partesDataC = dataC.split('/')
        let partesDataR = dataR.split('/')
        let anoC = new Number(partesDataC[2].valueOf()).valueOf()
        let mesC = new Number(partesDataC[1].valueOf()).valueOf()
        let diaC = new Number(partesDataC[0].valueOf()).valueOf()
        let anoR = new Number(partesDataR[2].valueOf()).valueOf()
        let mesR = new Number(partesDataR[1].valueOf()).valueOf()
        let diaR = new Number(partesDataR[0].valueOf()).valueOf()
        let dataEmissaoC = new Date(anoC, mesC, diaC);
        let cpf = new CPF(valorC, dataEmissaoC);
        let dataEmissaoR = new Date(anoR, mesR, diaR);
        let rg = new RG(valorR, dataEmissaoR);
        let tel = new Telefone(telefone.substring(0,2), telefone.substring(2,telefone.length));
        let cliente = new Cliente(nome, nomeSocial, cpf);
        cliente.addRg(rg);
        cliente.addTelefone(tel);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }
}