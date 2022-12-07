import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        width: 100%;
        flex-direction: row;
        aling-items: center; 
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: solid 2px #efefef;
        
        .tit {
            width: 100%;
            text-align: center;
            margin: 10px;
        }

        .inputs {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            aling-items: center;
        }

        .qtd {
            width: 20%;
        }

        .itemName {
            width: 30%;
        }

        .valor {
            width: 30%;
        }


        .qtd input {
            border-radius: 5px;
            height: 30px;
            padding: 5px;
            margin-top: 8px;
            border-color: #120A8f;
        }

        .qtd p {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 10pt;
        }

        .valor input {
            border-radius: 5px;
            height: 30px;
            padding: 5px;
            margin-top: 8px;
            border-color: #120A8f;
        }

        .valor p {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 10pt;
        }

        .itemName input {
            border-radius: 5px;
            height: 30px;
            padding: 5px;
            margin-top: 8px;
            border-color: #120A8f;
        }

        .itemName p {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 10pt;
        }



        

       
`