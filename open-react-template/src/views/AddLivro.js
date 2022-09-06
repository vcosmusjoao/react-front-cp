import React from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';


const mystyle = {
    margin: "20px"
};
const styleForm = {
    width:"200px"
}


function AddLivro() {
    return (
        <>
            <div class="container-sm ">
                <h1 className="mt-0 mb-16">
                    Novo Livro
                </h1>
                <ButtonGroup>
        
                    <Button tag="a" color="primary" wideMobile href="/">
                        Pagina Inicial
                    </Button>
                </ButtonGroup>

                <div class="form-group">
                    <label >Título:</label>
                    <input   type="text" name="paginas" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Páginas:</label>
                    <input type="number" name="paginas" class="form-control" />
                </div>

                <label for="categorias">Categorias:</label>
                <select id="categorias" name="categorias">
                    <option value="drama">Drama</option>
                    <option value="romance">Romance</option>
                    <option value="aventura">Aventura SLK</option>
                    <option value="infantil">Infantil</option>
                </select>

                <button> Enviar</button>

            </div>
        </>

    );
};

export default AddLivro;