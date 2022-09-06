import React from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';


const mystyle = {
    margin:"20px"
  };


function Categoria() {
    return (
        <>
            <div class="container-sm ">
                <h1 className="mt-0 mb-16">
                    Lista de Categorias
                </h1>
                <ButtonGroup>
                <Button tag="a" color="primary" wideMobile href="/addcategoria">
                    Nova Categoria
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/">
                    Pagina Inicial 
                    </Button>
                </ButtonGroup>
                <table border="1" style = {{  marginTop : 30 }}>
                    <tr>
                        <td>Nome</td>

                    </tr>
                    <tr>
                        <td>Infantil</td>
                    </tr>
                    <tr>
                        <td>Aventura</td>
                    </tr>
                    <tr>
                        <td>Drama</td>
                    </tr>
                </table>
            </div>
        </>

    );
};

export default Categoria;