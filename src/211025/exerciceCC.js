import styled from "styled-components";

const Div = styled.div`
    font-size : 13px;
    border : 2px solid blue ;
    border-raduis : 10px;
`;
function DivExemple(){
    return(
        <>
            <Div>Hello world !</Div>
        </>
    );
}
export default DivExemple;