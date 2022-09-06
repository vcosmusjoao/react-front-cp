import React from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';




function Livro() {
    return (
        <>
            <div class="container-sm ">
                <h1 className="mt-0 mb-16">
                    Lista de Livros
                </h1>
                <ButtonGroup>
                <Button tag="a" color="primary" wideMobile href="/addlivro">
                    Novo Livro
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/">
                    Pagina Inicial 
                    </Button>
                </ButtonGroup>
                <table border="1" style = {{  marginTop : 30 }}>
                    <tr>
                        <td>Nome</td>
                        <td>Categoria</td>
                        <td>Páginas</td>
                    </tr>
                    <tr>
                        <td>Pequena Sereia</td>
                        <td>Infantil</td>
                        <td>232</td>
                    </tr>
                    <tr>
                        <td>Maze Runner</td>
                        <td>Aventura</td>
                        <td>350</td>
                    </tr>
                    <tr>
                        <td>A menina que roubava livros</td>
                        <td>Drama</td>
                        <td>420</td>
                    </tr>
                </table>
            </div>
        </>

    );
};

export default Livro;