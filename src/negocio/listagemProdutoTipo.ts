import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutoTipo extends Listagem {
    private pets: Pet[]
    private entrada: Entrada

    constructor(pets: Pet[]){
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }

    private filtraTipo(pets: Pet[], tipo: string): Pet[] {
        const listaFiltrada: Pet[] = []
        pets.forEach(pet => {
            if(tipo === pet.getTipo){
                listaFiltrada.push(pet)
            }
        })
        return listaFiltrada
    }

    listar() : void {
        let tipo = this.entrada.receberTexto(`Digite o tipo de pet que deseja filtrar: `)
        console.log(`\nProdutos mais consumidos por pets do tipo ${tipo}:`)
        const lista = this.filtraTipo(this.pets, tipo)
        let listaRetorno: {tipo: string, data: {produto: Produto, qtd: number}[]} = {tipo: tipo, data: []}
        const produtos: string[] = []
        lista.forEach(pet => {
            pet.getProdutosConsumidos.forEach(produto => {
                if(!produtos.includes(produto.codigo)){
                    produtos.push(produto.codigo)
                    listaRetorno.data.push({produto: produto, qtd: 1})
                } else {
                    let indice = produtos.indexOf(produto.codigo)
                    listaRetorno.data[indice].qtd+=1
                }
            })
        })
        listaRetorno.data.forEach((data, index) => {
            console.log(`${index + 1} - ${data.produto.nome} com ${data.qtd} unidades vendidas`)
        })
        console.log(`----------------------------------\n`)
    }
}