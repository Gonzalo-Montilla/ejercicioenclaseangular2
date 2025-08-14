import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './features/registro/registro';


@Component({
  selector: 'app-root',
  imports: [RegistroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  tittle ='angular-forms-demo'
}
