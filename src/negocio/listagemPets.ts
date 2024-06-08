import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPet implements Listagem {
    private pets: Array<Pet>
    
    constructor(pets: Array<Pet>) {
        this.pets = pets
    }

    listar(): void {
        console.log(`\nLista de todos os pets: `)
        this.pets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Cpf do Dono: ${pet.getCpfDono.getValor}`)
            if(pet.getProdutosConsumidos.length > 0){
                console.log(`Produtos consumidos: `)
                pet.getProdutosConsumidos.forEach(produto => {
                    console.log(`Código: ${produto.codigo} - Nome: ${produto.nome} - Preço: ${produto.preco}`)
                })
            }
            if(pet.getServicosConsumidos.length > 0){
                console.log(`Serviços consumidos: `)
                pet.getServicosConsumidos.forEach(servico => {
                    console.log(`Código: ${servico.codigo} - Nome: ${servico.nome} - Preço: ${servico.preco}`)
                })
            }
            console.log(`---------------------------------`)
        })
        console.log(`\n`)
    }
}