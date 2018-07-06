import {Component} from '@angular/core';

@Component({
	selector:'app-dashboard',
	templateUrl:'./dashboard.component.html',
	styleUrls:['./dashboard.component.css']
})

export class DashboardComponent{
	constructor(){}
	data = [
    	{id: 1, title: 'Total Sales', amount: '22,450', type:'Monthly', chip:{icon:"trending_up", value:20, color:"primary"} },
    	{id: 2, title: 'Income', amount: '377,670', type:'Monthly', chip:{icon:"trending_up", value:10, color:"accent"} },
    	{id: 3, title: 'Traffic', amount: '54,845', type:'Montly', chip:{icon:"trending_up", value:9, color:"accent"} },
    	{id: 4, title: 'New User', amount:'245', type: 'Monthly', chip:{icon:"trending_down", value:2, color:"warn"} }
  	];
}