import styled from 'styled-components' // Importa a biblioteca styled-components
const listaMenu = ["Home", "Cursos", "Turmas"];// Cria um array chamado "listaMenu" com três strings

// Define um componente "Menu" com estilos usando styled-components
const Menu = styled.ul`
  display: flex;          /* Define a exibição flexível para a lista */
  align-items: center;    /* Centraliza verticalmente os itens na lista */
  gap: 5vw;               /* Define o espaçamento entre os itens na lista */
  padding: 0;             /* Remove o preenchimento padrão da lista */
  .itens {                /* Define estilos para elementos com a classe "itens" dentro da lista */
    list-style: none;     /* Remove os marcadores de lista (pontos ou números) */
    height: 100%;         /* Define a altura dos itens como 100% da altura do contêiner */
    cursor: pointer;      /* Altera o cursor do mouse quando passa sobre os itens para indicar que são interativos */
  }
`
function MenuNavegacao() { // Define um componente React chamado "MenuNavegacao"
  return (
    <Menu>{/*  Renderiza o componente "Menu" definido com styled-components*/}        
      {listaMenu.map((item) => (
        <li className="itens">{item}</li>/* Mapeia os itens do array "listaMenu" e cria elementos "li" com a classe "itens" para cada item */
      ))}
    </Menu>
  );
}
export default MenuNavegacao;// Exporta o componente React "MenuNavegacao" para uso em outros lugares

