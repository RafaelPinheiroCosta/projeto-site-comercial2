import styled from 'styled-components'
import { useState } from 'react';
import { cursos } from './dados';
import InputPesquisa from '../InputPesquisa';
import CardCurso from '../CardCurso';

const ConteinerPesquisa = styled.section`
    width: 80vw;                    /* Define a largura do elemento "main" como 80% da largura do contêiner pai */
    height: calc(100%);             /* Define a altura da navegação como 100% da altura do contêiner pai */
    display: flex;
    flex-direction: column;
    align-items: center;            /* Centraliza os itens verticalmente no contêiner pai */
    gap: 3vh;
    h1{
        font-size:3vw;
        margin: 0;
        padding: 0;
    }    
`

const Titulo = styled.h1`

    color : ${props => props.cor || '#000000'};
    font-size: ${props => props.tamanhoFonte || '20px'};
    font-weight:bold;

`

function PesquisaCurso() {
    
    const [cursosEncontrados, setCursosEncontrados] = useState([]);

    return (
        <ConteinerPesquisa>
            <Titulo cor={"#0a3792"} tamanhoFonte={"50px"}>
                Pesquise cursos de Interesse
            </Titulo>

            <InputPesquisa
                placeholder='Digite o título do curso:'
                onChange={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoBusca = cursos.filter(cursos => cursos.titulo.includes(textoDigitado))
                    setCursosEncontrados(resultadoBusca)
                }}
            />
            {
                cursosEncontrados.map(curso => (
                    <CardCurso
                        titulo = {curso.titulo}
                        horas = {curso.horas}
                        periodo = {curso.periodo}
                        area = {curso.area}
                        imagem = {curso.imagem}
                    />
                ))                
            }
        </ConteinerPesquisa>
    )
}
export default PesquisaCurso;