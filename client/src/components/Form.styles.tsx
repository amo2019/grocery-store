import styled from 'styled-components';

export const MainContainerForm = styled.form`
            margin: 2rem auto;
            max-width: 60rem;
            
        `;

export const FormBoxDiv = styled.div`
            padding: 0.5rem 0;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-top: 1rem;
        & select, option, input, label{
                font-size: 1.2rem;
                color: inherit;
            }
        & label{
                /* display: none; */
                flex-basis: 50%;
            }
        & [data-tooltip]:before {            
                position: absolute;
                content: attr(data-tooltip);
                opacity: 0;
                margin: -2rem 0rem;
                color: rgb(71, 71, 69);
    }

            & [data-tooltip]:hover:before {        
                opacity : 1;
            }
            @media all and (min-width: 500px){
                        & label{
                            display: block;
                        }
                    }

            @media all and (min-width: 680px){
                flex-direction: row;
                margin-left: 3rem;
                margin-right: 3rem;
                
                & label{
                    flex-basis: 6rem;
                    flex-shrink: 0;
                }
                & input,
                & select,
                & textarea{
                    flex-grow: 1;
                    flex-shrink: 1;
                }
            }
        `;

export const FlexContainer = styled.div`
            display: flex;
            align-content: center;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        `;

export const Error = styled.p`
            margin: 1rem auto;
            text-align: center;
        `;

export const TextArea = styled.textarea`
            margin-top: 1rem;
            text-align: center;
            height: 6rem;
            color: rgb(32, 30, 30);
        `;

export const HeaderDiv = styled.div`
        margin-top: 0.1rem;
        font-weight: bold;
        text-decoration-line: none;
        padding: 2rem;
        background-color: rgb(50, 53, 53);
        display: flex;
        flex-wrap: wrap;
        margin-left: 1rem;
        margin-right: 1rem;
        min-width: 260px;
        border-bottom: 2px solid rgb(70, 67, 67);
        & h1 {
            font-size: 2.25rem;
            color: white;
            background-color: transparent;
            text-decoration: none;
            color: aliceblue;
}
        `;
