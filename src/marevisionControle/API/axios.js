import axios from "axios";
function ExempleAxios(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res)})
}
export default ExempleAxios;