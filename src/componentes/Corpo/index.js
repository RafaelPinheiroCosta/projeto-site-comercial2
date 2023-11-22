import styled from 'styled-components' // Importa a biblioteca styled-components
import BarraNavegacao from "./BarraNavegacao"; // Importa o componente "BarraNavegacao" de um arquivo específico
import SecaoPrincipal from "./SecaoPrincipal"; // Importa o componente "SecaoPrincipal" de um arquivo específico

// Define um componente "ConteinerCorpo" com estilos usando styled-components
const ConteinerCorpo = styled.div`
    display: flex;          /* Configura a exibição flexível para o contêiner de corpo */
    width: 100vw;           /* Define a largura do contêiner de corpo como 100% da largura da janela */
    min-height: 85vh;           /* Define a altura do contêiner de corpo como 85% da altura da janela */
`
function Corpo() { // Define um componente React chamado "Corpo"
    return (
        <ConteinerCorpo>{/* Renderiza o componente "ConteinerCorpo" definido com styled-components */}
            <BarraNavegacao />{/* Renderiza o componente "BarraNavegacao" */}
            <SecaoPrincipal /> {/* Renderiza o componente "SecaoPrincipal" */}
        </ConteinerCorpo>
    );
}
export default Corpo;// Exporta o componente React "Corpo" para uso em outros lugares
