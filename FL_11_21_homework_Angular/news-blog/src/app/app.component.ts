import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sourceList = [
    {
      title: 'Articles',
      id: 1
    },
    {
      title: 'News',
      id: 2
    },
    {
      title: 'Features',
      id: 3
    }
  ];
}
