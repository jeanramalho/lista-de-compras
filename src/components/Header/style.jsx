import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        width: 100%;
        flex-direction: row;
        aling-items: center; 
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: solid 2px #efefef;

        .inputs {
            width: 106%;
            display: flex;
            flex-direction: row;
               
        }

        .qtd {
            width: 20%;
        }

        .quanti {
            width: 50%
        }

        .qtd input {
            border-radius: 5px;
            height: 30px;
        }



        

       
`