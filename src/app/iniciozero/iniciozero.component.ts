import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';





@Component({
  selector: 'app-iniciozero',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule,MatCardModule,MatGridListModule],
  templateUrl: './iniciozero.component.html',
  styleUrl: './iniciozero.component.css'
})
export class IniciozeroComponent {

}
