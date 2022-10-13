import produtores from "../mocks/produtores";
import topo from "../mocks/topo";

export const carregaProdutores = () => {
    return produtores;
}

export const carregaTopo = () => {
    return topo;
}

//este arquivo serve para fazer o carregamento de dados de um 
//arquivo externo (simulação) para que não seja preciso utilizar string fixa. 