import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map,startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-materialtable1-app';


  selectedValue="string";
  options: string[]=['angular','react','vue'];
  objectOptions=[
    {name:'angular'},
    {name:'angular material'},
    {name:'react'},
    {name:'vue'}
  ];


  myControl= new FormControl();
  filteredOptions!: Observable<string[]>;

  ngOnInit(){
    this,this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value))
    );
  }

  private _filter(value:string): string[]{
    const filterValue= value.toLowerCase();
    return this.options.filter(option=>
      option.toLowerCase().includes(filterValue)
      );
  }

displayFn(subject: { name: any; }){
  return subject? subject.name:undefined;
}
minDate=new Date();
maxDate=new Date(2019,3,10);

}
