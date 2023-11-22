import styled from 'styled-components' // Importa a biblioteca styled-components

// Define um componente "Navegacao" com estilos usando styled-components
const Navegacao = styled.nav`
    width: 20vw;                    /* Define a largura da navegação como 20% da largura do contêiner pai */
    min-height: 85vh;                   /* Define a altura da navegação como 85% da altura do contêiner pai */
    background-color: darkgrey;     /* Define a cor de fundo da navegação como cinza escuro */
`
// Define um componente React chamado "BarraNavegacao"
function BarraNavegacao() {
    return (
        <Navegacao> {/*Renderiza o componente "Navegacao" definido com styled-components*/}
            Nav
        </Navegacao>
    );
}
export default BarraNavegacao; // Exporta o componente React "BarraNavegacao" para uso em outros lugares