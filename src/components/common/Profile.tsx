import {IState as IProps} from "../../pages/Landing"

// interface IProps {
//     people:{
//         id:string;
//         image:string;
//         name:string;
//         notes?:string;
//         age:number;
//     }[];
// }

// export const Profile:React.FC<IProps>=({people})=>{
export const Profile=({people}:IProps)=>{
    // {console.log(people)}

    const handleDelete=()=>{
        console.log("delete was clicked")
    }

    const renderList=()=>{
        return people.map((person,key)=>{
            return(
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.image}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.notes}</p>
                    <button className="AddToList-btn">Edit</button>
                    <button className="AddToList-btn" onClick={handleDelete}>Delete</button>
                </li>
            );
        })
    }

    return(
        <ul>
            {renderList()}
        </ul>
    );
}