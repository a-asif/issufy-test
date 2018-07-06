import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { tableService } from '../table.service';
import { dialogComponent } from '../dialog/dialog.component';
import { filter } from 'rxjs/operators';

@Component({
	selector:'app-tables',
	templateUrl:'./tables.component.html',
	styleUrls:['./tables.component.css']
})

export class tableComponent implements OnInit {
	
	list:any = [];
	DialogRef: MatDialogRef<dialogComponent>;


	constructor(private TS:tableService, private dialog:MatDialog) {}

	ngOnInit(){
		this.getdeal();
	}

	opendialog(){
		this.DialogRef = this.dialog.open(dialogComponent, {
  			height: '500px',
  			width: '600px',
  			hasBackdrop: true
		})
	}

	getdeal(): void {
    	this.TS.getdealslist().subscribe(
    		resp =>{
    			if(resp){
    				this.list = resp;
    			}
    		},err =>{
    			console.log('err',err);
    		}
    	);
  	}

	displayedColumns: string[] = ['deal_name', 'company_name', 'cornerstone_investors_name', 'deal_type'];
}