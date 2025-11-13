import styled from "styled-components";
const Button = styled.button`
    background-color : blue;
    color : white;
    border-raduis : 10px;
`;
function ButtonTest (){
    return(
        <>
            <form>
                <label>Login : </label><input type="text"></input><br></br>
                <label>mot de passe : </label><input type="password"></input>
            </form>
            <Button>click !</Button>
        </>
    );
}
export default ButtonTest;