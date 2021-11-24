import styled from 'styled-components';

export const MainDiv = styled.div`
           padding: 0.50rem;
`;

export const GridDiv = styled.div`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 2.5rem;
            img, video {
            max-width: 100%;
            height: 322px;
}
        `;

export const FlexDiv = styled.div`
            display: flex;
            align-items: baseline;
            margin-top: auto;
            flex-flow: wrap;
            width: 100%;
            justify-content: center;
        `;

export const FlexContainer = styled.div`
            display: flex;
            align-items: baseline;
            margin-top: auto;
            flex-flow: wrap;
            width: 100%;
            justify-content: center;
        `;



export const FlexCart = styled.div`
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: space-between;
        `;


export const TextMDiv = styled.div`
    position: relative;
    height: calc(1.75rem * 3);
    max-height: calc(1.75rem * 3);
    overflow: hidden;
    padding-right: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-overflow: ellipsis;
    `;

export const InnerFlexDiv = styled.div`
                display: flex;
                align-items: baseline;
                margin-top: auto;
                flex-flow: wrap;
                flex-direction: row;
                margin-top: auto;
                margin-top: 0.25rem;
        `;

export const InnerDiv = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: right;
    flex-grow: max(0.8);
    justify-content: flex-end;
    font-weight: 700;
    margin-right: 1rem;
    margin-top: 0.25rem;
`;


export const Title = styled.h3`
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: max(0.8);    
    margin-top: 1rem;  
    margin-left: 1rem; 
`;

export const I = styled.i`
    margin-right: 0.5rem;
`;


export const Img = styled.img`
    margin-right: 0.5rem;
    max-width: 30%;
    height: 322px;
    display: flex;
    vertical-align: middle;
    height: 2rem;
`;


export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    padding: .7em 1.3em;
    font-size: 1.3em;
    border-radius: 10px;
    &:hover{
        background-color: rgb(56, 54, 54);
        color: yellow;
        cursor: pointer;
}
`;