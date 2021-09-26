import { Component } from '@angular/core';
import { SearchComponent } from '@the-empire/ui';


@Component({
  selector: 'the-empire-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends SearchComponent{
  title = 'star-destroyer';
}
