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

    private achaTipo(tipo: string, tipos: {tipo: string, data: {produto: Produto, qtd: number}[]}[]): boolean {
        tipos.forEach(typo => {
            if(typo.tipo === tipo){
                return true
            }
        })
        return false
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

    private listaTipos() {
        const tipos: {tipo: string, data: {produto: Produto, qtd: number}[]}[] = []
        this.pets.forEach((pet, index) => {
            if(!this.achaTipo(pet.getTipo, tipos)){
                tipos.push({tipo: pet.getTipo, data: []})
            } else {
                tipos.splice(index, 1, {tipo: pet.getTipo, data: []})
            }
        })
        return tipos
    }

    listar() : void {
        let tipo = this.entrada.receberTexto(`Digite o tipo de pet que deseja filtrar: `)
        console.log(`\nServiços mais consumidos por pets ${tipo}:`)
        const lista = this.filtraTipo(this.pets, tipo)
        const tipos = this.listaTipos()
        const index = tipos.indexOf({tipo: tipo, data: []})
        const listaRetorno = tipos[index]
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
            console.log(`${index} - ${data.produto.nome} com ${data.qtd} unidades vendidas`)
        })
    }
}