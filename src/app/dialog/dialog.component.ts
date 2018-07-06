import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { tableService } from '../table.service';

export interface dealtype{
	value:number,
	title:string
}

@Component({
	selector:'app-dialog',
	templateUrl:'./dialog.component.html',
	styleUrls:['./dialog.component.css']
})
export class dialogComponent implements OnInit{
	
    dealForm: FormGroup;

    deal_validation_messages = {
        'deal_reference': [
            { type: 'required', message: 'deal refernce is required' },
            { type: 'minlength', message: 'deal refernce must be at least 5 characters long' },
            { type: 'maxlength', message: 'deal refernce cannot be more than 25 characters long' },
            { type: 'pattern', message: 'Your deal refernce must contain only numbers and letters' },
        ],
        'deal_type_id': [
            { type: 'required', message: 'Please select your deal type' },
        ],
        'issuer_id':[
            { type:'required' , message:'issuer id is required' },
            { type:'pattern', message:'issuer id contain only numbers' }
        ],
        'deal_name':[
            {type:'required', message:'deal name is required'},
            {type:'pattern', message:'deal name contain only letters'}
        ]
    }

  	deals: dealtype[] = [
    	{value: 49, title: 'Early Look'},
   		{value: 50, title: 'Pilot Fishing'},
    	{value: 51, title: 'Initial Public Offering'},
    	{value: 52, title: 'Rights Issue'},
    	{value: 53, title: 'Accelerated Book Build'},
    	{value: 54, title: 'Non Deal Roadshow'},
    	{value: 98, title: 'Private Placement'},
    	{value: 99, title:'Initial Coin/Token Offering'}
  	];

	constructor(private formbuilder:FormBuilder,private dialogRef: MatDialogRef<dialogComponent>, private TS:tableService){}

	ngOnInit(){
        this.createForms();
	}


    createForms() {
        this.dealForm = this.formbuilder.group({
            deal_ref: new FormControl('', Validators.compose([
               Validators.maxLength(25),
               Validators.minLength(5),
               Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
               Validators.required
            ])),
            deal_type_id: new FormControl('' , [Validators.required]),
            issuer_id: new FormControl('', Validators.compose([
               Validators.pattern('^[0-9]+$'),
               Validators.required
            ])),
            deal_name:new FormControl('', Validators.compose([
               Validators.pattern('^[a-zA-Z ]+$'),
               Validators.required
            ]))
        })
    }

    onSubmitAccountDetails(value){
        this.TS.createdeal(value).subscribe(
            resp =>{
                if(resp){
                    console.log('resp',resp);
                }
            },err =>{
                console.log('err',err);
            }
        )
        this.dialogRef.close();
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}