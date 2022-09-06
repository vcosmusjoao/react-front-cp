import React from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';


const mystyle = {
    margin:"20px"
  };


function AddCategoria() {
    return (
        <>
            <div class="container-sm ">
                <h1 className="mt-0 mb-16">
                    Nova Categoria
                </h1>
                <ButtonGroup>
            
                    <Button tag="a" color="primary" wideMobile href="/">
                    Pagina Inicial 
                    </Button>
                </ButtonGroup>
                
                <div class="form-group">
                    <label >Título:</label>
                    <input   type="text" name="titulo" class="form-control" />
                </div>

                <button> Enviar</button>

            </div>
        </>

    );
};

export default AddCategoria;