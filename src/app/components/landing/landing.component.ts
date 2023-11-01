import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SecondSectionComponent } from '../second-section/second-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSectionComponent, SecondSectionComponent],
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export default class LandingComponent {

}
