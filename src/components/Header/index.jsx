import React from "react";
import { Container } from "./style";

function Header() {
    return (
        <Container>
            <div>
                <h1 className="titulo">Lista de Compras</h1>
                <input type="number" />
                <input type="text" placeholder="Nome do Item"/>
                
                
            </div>
            


        </Container>
    )
}

export default Header
