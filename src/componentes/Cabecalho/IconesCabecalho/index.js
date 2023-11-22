import styled from 'styled-components';// Importa a biblioteca styled-components
// Importa os caminhos das imagens e as atribui às variáveis "login" e "pesquisar"
import login from "../../../imagens/login.png";
import pesquisar from "../../../imagens/pesquisar.png";

const listaIcone = [login, pesquisar]; // Cria uma matriz chamada "listaIcone" que contém os caminhos das imagens

// Define um componente "Icones" com estilos usando styled-components
const Icones = styled.div`
  display: flex;                  /* Configura a exibição flexível para os elementos, alinhando-os horizontalmente */
  justify-content: center;        /* Centraliza os elementos horizontalmente no contêiner pai */
  gap: 1vw;                       /* Define um espaçamento entre os elementos de 1% da largura do contêiner pai */
  margin-right: 10vw;              /* Define uma margem à direita de 5% da largura do contêiner pai */
  .icone {                        /* Define uma regra para elementos com a classe "icone" */
    width: 3vw;                   /* Define a largura dos elementos com a classe "icone" como 3% da largura do contêiner pai */
  }
`
function IconesCabecalho() { // Define o componente React "IconesCabecalho"
  return (
    <Icones> {/* Renderiza o componente "Icones"*/}
      {listaIcone.map((icone) => (
        <img src={icone} className="icone" alt="login" /> /* Faz um mapeamento da "listaIcone" para renderizar as imagens */
      ))}
    </Icones>
  );
}
export default IconesCabecalho;// Exporta o componente "IconesCabecalho" para uso em outros lugares

