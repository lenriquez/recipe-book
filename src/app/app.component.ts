import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";
import { RecipeComponent } from "./recipe";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rb works!';
}
