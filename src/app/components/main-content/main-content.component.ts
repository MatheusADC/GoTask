import { Component } from '@angular/core';
import { WelcomeSectionComponent } from "../welcome-section/welcome-section.component";

@Component({
  selector: 'app-main-content',
  imports: [WelcomeSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
