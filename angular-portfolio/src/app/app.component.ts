import { Component } from '@angular/core';
import { Shams } from './mocks/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';
  skills = Shams.skills;
  experiences = Shams.experiences;
  // socials = Shams.socials;
}
