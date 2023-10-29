import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import LandingComponent from './components/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  btnMenu = ['inline-block', 'bg-white', 'h-0.5', 'w-6' , 'mt-1']
  btnMenuClicked = false

  isButtonMenu(){
    this.btnMenuClicked = !this.btnMenuClicked
    function navShown(){
      const navBar = document.querySelector('nav')!
      navBar.classList.toggle('hidden')
    }
    navShown()
  }
}
