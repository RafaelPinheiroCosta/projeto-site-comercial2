// Importa a biblioteca styled-components
import styled from 'styled-components'
import PesquisaCurso from './PesquisaCurso';
import CarrosselBootStrap from './CarrosselBootStrap'

// Define um componente "Main" com estilos usando styled-components
const Main = styled.main`
    width: 80vw;                /* Define a largura do elemento "main" como 80% da largura do contêiner pai */
    min-height: 85vh;               /* Define a altura da navegação como 85% da altura do contêiner pai */
    display: flex;
    flex-direction: column;
    align-items: center;        /* Centraliza os itens verticalmente no contêiner pai */
`
// Define um componente React chamado "SecaoPrincipal"
function SecaoPrincipal() {
    return (
        <Main> {/*Renderiza o componente "Main" definido com styled-components*/}
            <CarrosselBootStrap/>
            <PesquisaCurso/>               
        </Main>
    );
}
// Exporta o componente React "SecaoPrincipal" para uso em outros lugares
export default SecaoPrincipal;
