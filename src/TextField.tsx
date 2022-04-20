import { useState } from "react";

interface Person {
    firstName: string; 
    lastName: string; 
}

interface IProps {
    text:string;
    value:number;
    fn?: (bob:string)=>string;
    person: Person
    inputHandler: React.ChangeEventHandler<HTMLInputElement>
}

export const TextField:React.FC<IProps>=({text,value,person,fn,inputHandler})=>{

    const [obj,setObj]=useState<{message:string|null}>({message:"yup"});
    // const [obj,setObj]=useState(5);

    return(
        <div>
            This is {text} field
            <p>{obj.message}</p>
            {/* <p>{fn('eminem')}</p> */}
            <input  onChange={inputHandler}/>
        </div>
    );
}