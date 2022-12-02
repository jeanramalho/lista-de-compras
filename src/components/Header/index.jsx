import React from "react";
import { Container } from "./style";

function Header() {
    return (
        <Container>
            <div>
                <h1 className="titulo">Lista de Compras</h1>
                <div className="qtd">
                    <p>QTD</p>
                    <input type="number" />
                </div>
                
                <input type="text" placeholder="Nome do Item"/>
                
                
            </div>
            


        </Container>
    )
}

export default Header
