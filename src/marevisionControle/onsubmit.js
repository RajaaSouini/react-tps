export default function OnSubmit(){
    function handleSubmit(e){
        e.preventDefault();
        console.log("You clicked the button");
    }
    return(<>
        <form onSubmit={handleSubmit}>
            <button type="submit">click me</button>
        </form>
    </>);
}