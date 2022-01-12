import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents=[
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule
];

@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
