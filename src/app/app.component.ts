import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../app/header/header.component';
import {FooterComponent} from '../app/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProfileComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio-albin18';
}
