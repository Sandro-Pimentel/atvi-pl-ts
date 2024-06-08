import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemServicoRaca extends Listagem {
    private pets: Pet[]
    private entrada: Entrada

    constructor(pets: Pet[]){
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }

    private filtraRaca(pets: Pet[], raca: string): Pet[] {
        const listaFiltrada: Pet[] = []
        pets.forEach(pet => {
            if(raca === pet.getRaca){
                listaFiltrada.push(pet)
            }
        })
        return listaFiltrada
    }

    listar() : void {
        let raca = this.entrada.receberTexto(`Digite a raça de pet que deseja filtrar: `)
        console.log(`\nServiços mais consumidos por pets da raça ${raca}:`)
        const lista = this.filtraRaca(this.pets, raca)
        let listaRetorno: {raca: string, data: {produto: Produto, qtd: number}[]} = {raca: raca, data: []}
        const servicos: string[] = []
        lista.forEach(pet => {
            pet.getServicosConsumidos.forEach(servico => {
                if(!servicos.includes(servico.codigo)){
                    servicos.push(servico.codigo)
                    listaRetorno.data.push({produto: servico, qtd: 1})
                } else {
                    let indice = servicos.indexOf(servico.codigo)
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