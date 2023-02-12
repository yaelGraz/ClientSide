import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { children } from 'src/models/children';
import { person } from 'src/models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(public http:HttpClient) { }
  person=new person(null,null,null,null,null,null,[])
  showChildArray:boolean=false
  addPerson(newPerson:person) 
  {
    return this.http.post<any>(`https://localhost:7271/api/Person`,newPerson);
  }

 
}
