import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import imagem_curso1 from '../../../../imagens/carrosselImagem1.png'
import imagem_curso2 from '../../../../imagens/carrosselImagem2.png'
import imagem_curso3 from '../../../../imagens/imagem-curso.jpg'

const imagens = [imagem_curso1, imagem_curso2, imagem_curso3];

const StyledCarousel = styled(Carousel)`
    margin-top: 20px;
    overflow: hidden;
    height: 60vh;
    width:50wv;
    img{
        object-fit: cover;
    }
`

function CarrosselBootStrap() {
    return (
        <StyledCarousel>
            {imagens.map((imagem) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagem}
                        alt="Primeiro slide"
                    />
                    <Carousel.Caption>
                        <h3>Título da imagem</h3>
                        <p>uma breve descrição da imagem aqui.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </StyledCarousel>

    );
};

export default CarrosselBootStrap;
