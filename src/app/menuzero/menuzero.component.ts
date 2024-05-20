import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menuzero',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './menuzero.component.html',
  styleUrl: './menuzero.component.css'
})
export class MenuzeroComponent {

}
