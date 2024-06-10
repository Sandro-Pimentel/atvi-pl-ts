import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import AdicaoProduto from "../negocio/adicaoProduto";
import AdicaoServico from "../negocio/adicaoServico";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import AtualizacaoProduto from "../negocio/atualizacaoProduto";
import AtualizacaoServico from "../negocio/atualizacaoServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemClientesConsumo from "../negocio/listagemClientesConsumo";
import ListagemClientesVal from "../negocio/listagemClientesVal";
import ListagemPet from "../negocio/listagemPets";
import ListagemProdutoConsumido from "../negocio/listagemProdutoConsumido";
import ListagemProdutoRaca from "../negocio/listagemProdutoRaca";
import ListagemProdutoTipo from "../negocio/listagemProdutoTipo";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicoConsumido from "../negocio/listagemServicoConsumido";
import ListagemServicoRaca from "../negocio/listagemServicoRaca";
import ListagemServicoTipo from "../negocio/listagemServicoTipo";
import ListagemServicos from "../negocio/listagemServicos";
import RemocaoCliente from "../negocio/remocaoCliente";
import RemocaoPet from "../negocio/remocaoPet";
import RemocaoProduto from "../negocio/remocaoProduto";
import RemocaoServico from "../negocio/remocaoServico";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new Empresa();
let execucao = true;
let entrada = new Entrada();
const opcoesAdm = `
Opções:
0 - Voltar
1 - Clientes
2 - Produtos
3 - Serviços
4 - Pets
5 - Listagens gerais
`

const opcoesCrud = `
Opções:
0 - Voltar
1 - Cadastrar
2 - Listar
3 - Atualizar
4 - Remover
`

const opcoesListagens = `
Opções:
0 - Voltar
1 - Clientes que mais consumiram(quantidade)
2 - Clientes que mais consumiram(valor)
3 - Produtos mais consumidos
4 - Serviços mais consumidos
5 - Produtos mais consumidos(tipo de pet)
6 - Serviços mais consumidos(tipo de pet)
7 - Produtos mais consumidos(raça de pet)
8 - Serviços mais consumidos(raça de pet)
`

while (execucao) {
    console.log(`0 - Sair`);
    console.log(`1 - Administrador`);
    console.log(`2 - Usuário`);
    let opcao = entrada.receberNumero(`Escolha como deseja entrar: `);
    switch(opcao) {
        case 1:
            let opcao1 = 0;
            if(opcao > 0) {
                console.log(opcoesAdm);

                opcao1 = entrada.receberNumero(`Por favor, escolha uma opção: `);
            }

            let opcao2 = 0;
            let opcaoListagem = 0;
            if(opcao1 > 0 && opcao1 < 5) {
                console.log(opcoesCrud);
            
                opcao2 = entrada.receberNumero(`Por favor, escolha outra opção: `);

            } else {
                console.log(opcoesListagens);

                opcaoListagem = entrada.receberNumero(`Por favor, escolha uma opção: `)
            }

            switch(opcao1) {
                case 1:
                    switch(opcao2) {
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
                    switch(opcao2) {
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
                    switch(opcao2) {
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
                    switch(opcao2) {
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

                case 5:
                    switch(opcaoListagem) {
                        case 2:
                            let listagemClientesVal = new ListagemClientesVal(empresa.getClientes)
                            listagemClientesVal.listar()
                            break;
                        case 3:
                            let listagemProdutoConsumido = new ListagemProdutoConsumido(empresa.getClientes, empresa.getProdutos)
                            listagemProdutoConsumido.listar()
                            break;
                        case 4:
                            let listagemServicoConsumido = new ListagemServicoConsumido(empresa.getClientes, empresa.getServicos)
                            listagemServicoConsumido.listar()
                            break;
                        case 5:
                            let listagemProdutoTipo = new ListagemProdutoTipo(empresa.getPets)
                            listagemProdutoTipo.listar()
                            break;
                        case 6:
                            let listagemServicoTipo = new ListagemServicoTipo(empresa.getPets)
                            listagemServicoTipo.listar()
                            break;
                        case 7:
                            let listagemProdutoRaca = new ListagemProdutoRaca(empresa.getPets)
                            listagemProdutoRaca.listar()
                            break;
                        case 8:
                            let listagemServicoRaca = new ListagemServicoRaca(empresa.getPets)
                            listagemServicoRaca.listar()
                            break;
                        case 0:
                            break;
                        default:
                            let listagemClientesConsumo = new ListagemClientesConsumo(empresa.getClientes);
                            listagemClientesConsumo.listar();
                            break;
                    }
            }
            break;

        case 2:
            let opcaoUser = 0
            
            console.log(`0 - Voltar`);
            console.log(`1 - Comprar Produto`);
            console.log(`2 - Comprar Serviço`);
            opcaoUser = entrada.receberNumero(`Escolha a opção de compra: `)

            switch(opcaoUser) {
                case 1:
                    let adicaoProduto = new AdicaoProduto(empresa.getProdutos, empresa.getClientes, empresa.getPets);
                    adicaoProduto.adicionar();
                    break;
                case 2:
                    let adicaoServico = new AdicaoServico(empresa.getServicos, empresa.getClientes, empresa.getPets);
                    adicaoServico.adicionar();
                    break;
                case 0:
                    break;
                }
            break;

        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Operação não atendida :(`);
    }
}