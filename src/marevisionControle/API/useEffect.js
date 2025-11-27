import axios from "axios";
import { useEffect } from "react";

function UseEffectTest(){
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res.data)})
        },[])
}
export default UseEffectTest;