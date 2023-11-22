import styled from 'styled-components'// Importa a biblioteca styled-components
import logo from "../../../imagens/SENAI_São_Paulo_logo.png"; // Importa a imagem "SENAI_São_Paulo_logo.png" e a associa à variável "logo"

// Define um componente "LogoTipo" com estilos usando styled-components
const LogoTipo = styled.div`
  display: flex;              /* Configura a exibição flexível com uma coluna de itens */
  flex-direction: column;     
  align-items: center;        /* Centraliza os itens verticalmente no contêiner pai */
  margin-left: 10vw;           /* Define uma margem à esquerda de 5% da largura do contêiner pai */
  .Logo-img {                 /* Define regras para elementos com a classe "Logo-img" aninhados dentro do conteiner Logotipo"  */
    width: 15vw;              /* Define a largura dos elementos com a classe "Logo-img" como 20% da largura do contêiner pai */
    pointer-events: none;     /* Desativa a interação com os elementos, ou seja, eles não responderão a eventos de clique  */
  }
  .Logo-texto {               /* Define regras para elementos com a classe "Logo-texto" aninhados dentro do conteiner Logotipo" */
    font-size: 2vw;           /* Define o tamanho da fonte dos elementos com a classe "Logo-texto" como 3% da largura do contêiner pai */
    margin: 0;                /* Remove margem ao redor dos elementos */
    font-weight: bold;        /* Define a fonte como negrito */
  }
`
function Logotipo() {// Define a função do componente React chamada "Logotipo"
  return (
    <LogoTipo>{/* Renderiza o componente "LogoTipo"*/}      
      <img src={logo} className="Logo-img" alt="logo" />{/* Exibe a imagem "SENAI_São_Paulo_logo.png" com a classe "Logo-img" e texto alternativo "logo" */} 
      <p className='Logo-texto'>"Anchieta"</p>{/* Exibe um parágrafo com a classe "Logo-texto" contendo o texto "Anchieta" */}
    </LogoTipo>   
  );
}
export default Logotipo;// Exporta o componente React "Logotipo" para uso em outros lugares
