import { AfterViewInit, Component } from '@angular/core';
import { Inventor } from './common/inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.render(this.show);
  }
  title = 'angular-01';

  inventors: Inventor[] = [
    {id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {id: 2, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {id: 3, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  ]

  show(innerHTML: string) {
    let item = document.querySelector('#list');
    if(item){
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string)=> any){
     let innerHTMl = this.inventors.map(item=>{
       return `
       <tr>
        <td>${item.id}</td>
        <td>${item.first}</td>
        <td>${item.last}</td>
        <td>${item.year}</td>
        <td>${item.passed}</td>
       </tr>
       `;
     }).join('');

     callback(innerHTMl);
  }
}
