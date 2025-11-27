import styled from "styled-components";
function Exercice4Styled (){
    const Article = styled.article`
        border : 1px solid rgba(0,0,0,0.3) ;
        border-raduis : 10px;
        margin : 20px;
        padding : 10px;
        line-height : 1.5em ;
    `;
    const H2 = styled.h2`
        border-bottom : 1px dotted;
        border-raduis : 2px;
    `;
    const Span = styled.span`
        font-size : 30px;
        font-family : italic ;

    `;
    return(<>
        <Article>
            <H2>Titre</H2>
            <div>
                <p>Pour ajouter du style à votre application React , vous avez certainement jusqu'ici utilisé 
                    du CSS. Pour gagner du temps de développement sur le CSS nous pouvons meme utiliser des
                    bibliothèques comme<Span> Bootstrap </Span>  ou encore <Span> Tailwind </Span> .
                </p>
                <a href="#">Read more</a>
            </div>
        </Article>
    </>);

}
export default Exercice4Styled;