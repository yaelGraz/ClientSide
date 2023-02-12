import {children} from './children'
export class person
{
    
    constructor(public PersonId:string,public FirstName:string,public LastName:string,public BirthDate:Date,public HMO:string,public Gender:string,public Children:children[]) {}   
}
