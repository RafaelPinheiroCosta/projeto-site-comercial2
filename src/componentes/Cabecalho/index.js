import styled from 'styled-components'; // Importa a biblioteca styled-components
import Logotipo from "../Cabecalho/Logotipo";// Importa o componente React "Logotipo" de um arquivo específico
import MenuNavegacao from "../Cabecalho/MenuNavegacao";// Importa o componente React "MenuNavegacao" de um arquivo específico
import IconesCabecalho from "../Cabecalho/IconesCabecalho";// Importa o componente React "IconesCabecalho" de um arquivo específico

// Define um componente "Header" com estilos usando styled-components
const Header = styled.header`
  background-color: #0a3792;          /* Define a cor de fundo do cabeçalho como azul (#0a3792) */
  height: 15vh;                       /* Define a altura do cabeçalho como 20% da altura da janela de visualização (20vh) */
  display: flex;                      /* Configura a exibição flexível para os elementos dentro do cabeçalho */
  align-items: center;                /* Centraliza verticalmente os elementos dentro do cabeçalho */
  justify-content: space-between;     /* Distribui o espaço entre os elementos no cabeçalho (espaço entre os lados) */
  font-size: calc(10px + 2vmin);      /* Define o tamanho da fonte com base na largura da janela de visualização */
  color: white;                       /* Define a cor do texto como branco */
`
function Cabecalho() {  // Define a função do componente React chamada "Cabecalho"
  return (
    <Header>{/*Renderiza o componente "Header" definido com styled-components*/} 
      <Logotipo /> {/* Renderiza o componente "Logotipo" no cabeçalho */}        
      <MenuNavegacao /> {/* Renderiza o componente "MenuNavegacao" no cabeçalho */}
      <IconesCabecalho /> {/* Renderiza o componente "IconesCabecalho" no cabeçalho */}
    </Header>
  );
}
export default Cabecalho;// Exporta o componente React "Cabecalho" para uso em outros lugares
