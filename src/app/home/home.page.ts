import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {

  username?: string; 
  password?: string; 

  constructor() { }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
