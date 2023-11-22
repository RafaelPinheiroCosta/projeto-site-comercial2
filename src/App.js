import styled from 'styled-components' // Importa a biblioteca styled-components
import Corpo from './componentes/Corpo'; // Importa o componente "Corpo" de um arquivo específico
import Cabecalho from './componentes/Cabecalho'; // Importa o componente "Cabecalho" de um arquivo específico

// Define um componente "AppStyled" com estilos usando styled-components
const AppStyled = styled.div`
  width: 100vw;                   /* Define a largura do elemento "div" como 100% da largura da janela */
  min-height: 100vh;                  /* Define a altura do elemento "div" como 100% da altura da janela */
  background-color: gainsboro;    /* Define a cor de fundo do elemento "div" como cinza claro */
`
// Define o componente React principal "App"
function App() {
  return (    
    <AppStyled>{/* Renderiza o componente "AppStyled" definido com styled-components */}        
        <Cabecalho />{/* Renderiza o componente "Cabecalho" */}        
        <Corpo/> {/* Renderiza o componente "Corpo" */}
    </AppStyled>
  );
}
export default App; // Exporta o componente React "App" para ser usado como ponto de entrada da aplicação

