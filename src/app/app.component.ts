import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  
displayFn(subject: { name: any; }){
  return subject? subject.name:undefined;
}

}
