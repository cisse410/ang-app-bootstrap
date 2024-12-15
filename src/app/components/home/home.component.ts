import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  courses: any[] = [];
}
