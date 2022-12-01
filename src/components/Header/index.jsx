import React from "react";
import { Container } from "./style";

function Header() {
    return (
        <Container>
            <div>
                <h1 className="titulo">Lista de Compras</h1>
                <input type="text" placeholder="Nome do Item"/>
                <input type="number" />
                
            </div>
            


        </Container>
    )
}

export default Header
