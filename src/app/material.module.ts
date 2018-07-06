import { NgModule } 						from '@angular/core';
import { CommonModule } 					from '@angular/common';
import { MatButtonModule,MatInputModule } 	from '@angular/material';
import { MatToolbarModule } 				from '@angular/material/toolbar';
import { MatCardModule } 					from '@angular/material/card';
import { MatGridListModule } 				from '@angular/material/grid-list';
import { FlexLayoutModule } 				from '@angular/flex-layout';
import { MatChipsModule } 					from '@angular/material/chips';
import { MatIconModule } 					from '@angular/material/icon';
import { MatTableModule } 					from '@angular/material/table';
import { MatDialogModule } 					from '@angular/material/dialog';
import { MatFormFieldModule } 				from '@angular/material/form-field';
import { MatSelectModule } 					from '@angular/material/select';

@NgModule({
	imports: [
	  	MatButtonModule,
	  	MatToolbarModule,
	  	MatCardModule,
	  	MatGridListModule,
	  	FlexLayoutModule,
	  	MatChipsModule,
	  	MatIconModule,
	  	MatTableModule,
	  	MatDialogModule,
	  	MatFormFieldModule,
	  	MatInputModule,
	  	MatSelectModule
	],
  	exports: [
  		MatButtonModule,
  		MatToolbarModule,
  		MatCardModule,
  		MatGridListModule,
  		FlexLayoutModule,
  		MatChipsModule,
  		MatIconModule,
  		MatTableModule,
  		MatDialogModule,
  		MatFormFieldModule,
  		MatInputModule,
  		MatSelectModule
  	],
})
export class MaterialModule { }