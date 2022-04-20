import { useState } from "react";
import { IState as Props } from "../../pages/Landing";

interface IInitialHuman {
    id: string;
    image:string;
    name:string;
    notes:string;
    age:number;
}

interface IHuman {
    id: string;
    image:string;
    name:string;
    notes:string;
    age:number;
}

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

export const AddPerson: React.FC<IProps>=({people,setPeople})=>{

    let initialHuman : IInitialHuman ={
        id: (new Date()).toISOString(),
        image:"",
        name:"",
        notes:"",
        age:0
    }

    const inputHandler =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        // console.log("before",human)
        setHuman({
            ...human,
            [e.target.name]: e.target.value
        })
        // console.log("after",human)
    }

    // const textInputHandler: React.ChangeEventHandler<HTMLTextAreaElement>=(e)=>{
    //     setHuman({
    //         ...human,
    //         [e.target.name]:e.target.value
    //     })
    // }

    const addPeople: React.MouseEventHandler<HTMLButtonElement>=():void=>{

        if (!human.name||!human.age||!human.image) {
            return;            
        }

        setPeople([
            ...people,
            human
        ])

        setHuman({
            name:"",
            image:"",
            notes:"",
            age:0,
            id:""
        })
    }

    const [human,setHuman]=useState<IHuman>({...initialHuman});

    console.log("people",people, setPeople)
    console.log("human",human)

    return(
        <div className="AddToList">
            <input placeholder="Name" className="AddToList-input" type="text" onChange={inputHandler} name="name" value={human.name}/>
            <input placeholder="Age" className="AddToList-input" type="text" onChange={inputHandler} name="age" value={human.age}/>
            <input placeholder="Image" className="AddToList-input" type="text" onChange={inputHandler} name="image" value={human.image}/>
            <textarea placeholder="Notes" className="AddToList-input" name="notes" onChange={inputHandler}  value={human.notes}/>
            <button className="AddToList-btn" onClick={addPeople}>Add to List</button>
        </div>
    );
}