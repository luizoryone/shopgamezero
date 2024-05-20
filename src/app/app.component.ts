import { Component } from '@angular/core';
import { RouterOutlet , RouterModule} from '@angular/router';
import { LoginzeroComponent } from './loginzero/loginzero.component';
import { IniciozeroComponent } from "./iniciozero/iniciozero.component";
import { MenuzeroComponent } from "./menuzero/menuzero.component";
import { RodapezeroComponent } from './rodapezero/rodapezero.component';






import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    RodapezeroComponent,
    LoginzeroComponent,
    MenuzeroComponent,
    IniciozeroComponent,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingGameZero';
  
  
}
