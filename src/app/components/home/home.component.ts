import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  courses: any[] = [];

  ngOnInit() {
    this.getAllCourses();
  }

  private getAllCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }
}
