import React from "react";
import { Container } from "./style";

function Header() {
    return (
        <Container>
            <div>
                <h1 className="titulo">Lista de Compras</h1>

                <div className="inputs">    
                    <div className="qtd">
                        <p>QTD</p>
                        <input type="number" />
                    </div>
                    
                    <div className="itemName">
                        <p>Nome do Item</p>
                        <input type="text" placeholder="Nome do Item"/>
                    </div> 
                </div>                
                
            </div>
            


        </Container>
    )
}

export default Header
