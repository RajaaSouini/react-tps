import styled from "styled-components";
const Title = styled.h1`
    color : red;
    font-size: 30px;
    text-align : center;
    `;

const Button = styled.button`
    background-color : ${props => props.primary ? 'palevioletred' : 'white'};
    color : ${props=> props.primary ? 'white' : 'palevioletred'};
    font-size : 1em ;
    margin : 1em;
    padding : 0.25em 1em;
    border: 2px solid palevioletred;
    border-raduis : 3px;
    `;
function Test(){
    return(
        <>
            <Title>
                je m'appelle Rajaa Souini
            </Title>
            <Button primary>click me </Button>
            <Button > click</Button>
        </>
    );
}
export default Test;