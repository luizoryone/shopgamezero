import { LoginzeroComponent } from './loginzero/loginzero.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IniciozeroComponent } from "./iniciozero/iniciozero.component";
import { MenuzeroComponent } from "./menuzero/menuzero.component";
import { RodapezeroComponent } from './rodapezero/rodapezero.component';
import { RouterModule } from '@angular/router';




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
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    IniciozeroComponent,],
  templateUrl: './app.component.html',
  template: `
    <nav>
      <a routerLink="/inicio">Início</a>
      <a routerLink="/login">Login</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingGameZero';
  
}
