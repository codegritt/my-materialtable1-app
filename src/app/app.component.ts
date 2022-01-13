import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  title = 'my-materialtable1-app';


  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }
  openSnackbar(message: string, action: string | undefined) {
    let snackBarRef = this.snackBar.open(message, action);

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('snackbar dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('snackbar triggered');
    });
  }
    openDialog(){
      let dialogRef = this.dialog.open(DialogExampleComponent,{data:{name: 'gokul'}});

      dialogRef.afterClosed().subscribe(result=>{
        console.log('Dialog result: ${result}')
      })
    }

  





  selectedValue = "string";
  options: string[] = ['angular', 'react', 'vue'];
  objectOptions = [
    { name: 'angular' },
    { name: 'angular material' },
    { name: 'react' },
    { name: 'vue' }
  ];


  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this, this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(subject: { name: any; }) {
    return subject ? subject.name : undefined;
  }
  minDate = new Date();
  maxDate = new Date(2019, 3, 10);

}
function openDialog() {
  throw new Error('Function not implemented.');
}

