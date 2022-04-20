import { useState } from 'react';
import { PROFILE } from '../utils/mockData/Profile'
import { Profile } from '../components/common/Profile';
import { AddPerson } from '../components/partials/AddPerson';

export interface IState {
    people:{
      id:string;
      image:string;
      name:string;
      notes?:string;
      age:number;
    }[]
  }

export const Landing=()=>{
    const [people,setPeople]=useState<IState["people"]>([...PROFILE]);
    return(
        <main>
            <h1>List of People Invited</h1>
            <Profile people={people}/>
            <AddPerson people={people} setPeople={setPeople}/>
        </main>
    );
}