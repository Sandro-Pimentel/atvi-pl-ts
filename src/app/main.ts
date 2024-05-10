import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizacaoProduto from "../negocio/atualizacaoProduto";
import AtualizacaoServico from "../negocio/atualizacaoServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import RemocaoProduto from "../negocio/remocaoProduto";
import RemocaoServico from "../negocio/remocaoServico";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import RemocaoCliente from "../negocio/remocaoCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPet from "../negocio/listagemPets";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import RemocaoPet from "../negocio/remocaoPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true
let entrada = new Entrada()

while (execucao) {
    console.log(`0 - Sair`)
    console.log(`1 - Administrador`)
    console.log(`2 - Usuário`)
    let opcao = entrada.receberNumero(`Escolha como deseja entrar: `)

    switch (opcao) {
        case 1:
            let opcao1 = 0
            if(opcao > 0) {
                console.log(`Opções:`);
                console.log(`0 - Voltar`);
                console.log(`1 - Clientes`);
                console.log(`2 - Produtos`);
                console.log(`3 - Serviços`);
                console.log(`4 - Pets`)

                opcao1 = entrada.receberNumero(`Por favor, escolha uma opção: `)
            }

            let opcao2 = 0
            
            if(opcao1 > 0) {
                console.log(`0 - Voltar`)
                console.log(`1 - Cadastrar`)
                console.log(`2 - Listar`)
                console.log(`3 - Atualizar`)
                console.log(`4 - Remover`)

                opcao2 = entrada.receberNumero(`Por favor, escolha outra opção: `)
            }

            switch (opcao1) {
                case 1:
                    switch (opcao2) {
                        case 2:
                            let listagemC = new ListagemClientes(empresa.getClientes)
                            listagemC.listar()
                            break;
                        case 3:
                            let atualizacaoC = new AtualizacaoCliente(empresa.getClientes)
                            atualizacaoC.atualizar()
                            break;
                        case 4:
                            let remocaoC = new RemocaoCliente(empresa.getClientes)
                            remocaoC.apagar()
                            break;
                        case 0:
                            break;
                        default:
                            let cadastroC = new CadastroCliente(empresa.getClientes)
                            cadastroC.cadastrar()
                            break;
                    }
                break;
                case 2:
                    switch (opcao2) {
                        case 2:
                            let listagemP = new ListagemProdutos(empresa.getProdutos)
                            listagemP.listar()
                            break;
                        case 3:
                            let atualizacaoP = new AtualizacaoProduto(empresa.getProdutos)
                            atualizacaoP.atualizar()
                            break;
                        case 4:
                            let remocaoP = new RemocaoProduto(empresa.getProdutos)
                            remocaoP.apagar()
                            break;
                        case 0:
                            break;
                        default:
                            let cadastroP = new CadastroProduto(empresa.getProdutos)
                            cadastroP.cadastrar()
                            break;
                    }
                break;
                case 3:
                    switch (opcao2) {
                        case 2:
                            let listagemS = new ListagemServicos(empresa.getServicos)
                            listagemS.listar()
                            break;
                        case 3:
                            let atualizacaoS = new AtualizacaoServico(empresa.getServicos)
                            atualizacaoS.atualizar()
                            break;
                        case 4:
                            let remocaoS = new RemocaoServico(empresa.getServicos)
                            remocaoS.apagar()
                            break;
                        case 0:
                            break;
                        default:
                            let cadastroS = new CadastroServico(empresa.getServicos)
                            cadastroS.cadastrar()
                            break;
                    }
                break;
                
                case 4:
                    switch (opcao2) {
                        case 2:
                            let listagemPet = new ListagemPet(empresa.getPets)
                            listagemPet.listar()
                            break;
                        case 3:
                            let atualizacaoPet = new AtualizacaoPet(empresa.getPets, empresa.getClientes)
                            atualizacaoPet.atualizar()
                            break;
                        case 4:
                            let remocaoPet = new RemocaoPet(empresa.getPets, empresa.getClientes)
                            remocaoPet.apagar()
                            break;
                        case 0:
                            break;
                        default:
                            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
                            cadastroPet.cadastrar()
                            break;
                    }
                    break;
                }
                break;
        
        case 2:
            console.log(`1 - Adicionar produto ao carrinho`)
            console.log(`1 - Adicionar serviço ao carrinho`)
            console.log(`2 - Listar produtos no carrinho`)
            console.log(`2 - Listar serviços no carrinho`)
            console.log(`3 - Alterar produto no carrinho`)
            console.log(`3 - Alterar serviço no carrinho`)
            console.log(`4 - Remover produto do carrinho`)
            console.log(`4 - Remover serviço do carrinho`)
            let opcao3 = entrada.receberNumero(`Escolha como deseja gerenciar os produtos ou serviços`)
            switch(opcao3){
                case 1:
                    //n faço ideia doq fazer
            }

            break; 
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}