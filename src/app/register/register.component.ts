import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { toArray } from 'rxjs';
import { children } from 'src/models/children';
import { person } from 'src/models/person';

import { ExcelService } from '../services/excel.service';
import { PersonServiceService } from '../services/person-service.service';
import {genders} from '../arrays'
import {healthFunds} from '../arrays'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
genders=genders;
healthFunds=healthFunds;
obj;

  constructor(private fb: FormBuilder,public personService:PersonServiceService,private excelService:ExcelService) {
  }
 
  title = 'ClientApp';



  @ViewChild('form') public form: NgForm;
  
   addChild()
   {
   this.personService.person.Children.push(new children(null,null,new Date()));
   }
      
      
    
  
    
  
    
    
  
       
  

     

     
    
   
  
    onSubmit(): void{
   
    if(!this.form.valid)
    alert("form is not correct try again!")
    else
      this.addPerson();
    }

   
 
    childrenArray()
    {
     console.log(this.personService.person.Children)
      return this.personService.person.Children;
    }
  
 
  
  
 
  
  

   
  
    clearForm(): void{
      this.form.reset();
    }
    addPerson()
    {
 
    this.personService.addPerson(this.personService.person).subscribe((succ)=>{alert("user added succesfully!")},(err)=>{   alert("error")})
     }
  
   
    exportAsXLSX():void {
 
    let arr = this.makePresonObjTOArr(this.personService.person)
    
//console.log("arrPer",arr)
    
      this.excelService.exportAsExcelFile(arr, 'sample');
    }
      makePresonObjTOArr(object:object)
    {
      
        return Object
            .entries(object)
            .map(([key, value]) => Object.assign({ key }, value && typeof value === 'object'
                ? { value: '', children:  this.makePresonObjTOArr(value) }
                : { value, children: [] }
            ));
    }
    
 
    }
   
    
  
  
  
  
  

