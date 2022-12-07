import React from "react";
import { Container } from "./style";

function Header() {
    return (
        <Container>
            <div>
                <div className="tit">
                    <h1 className="titulo">Lista de Compras</h1>
                </div>
                

                <div className="inputs">    
                    <div className="qtd">
                        <p>QTD</p>
                        <input type="number" className="quanti"/>
                    </div>
                    
                    <div className="itemName">
                        <p>Nome do Item</p>
                        <input type="text" placeholder="Nome do Item"/>
                    </div> 

                    <div className="valor">
                        <p>Valor</p>
                        <input type="number" className="itemValor" />
                    </div>
                </div>                
                
            </div>
            


        </Container>
    )
}

export default Header
