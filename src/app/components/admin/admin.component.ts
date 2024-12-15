import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CoursesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  model: any = {};
  cover!: string | null;
  cover_file: any;
  showError = false;
  courses: any[] = [];

  ngOnInit(): void {
    this.getAllCourses();
  }

  private getAllCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }

  addCourse(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('Formulaire invalide');
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }

    console.log(form.value);
    this.saveCourse(form.value);
    this.clearForm(form);
  }

  private clearForm(form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }

  onImageSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
  }

  saveCourse(formValue: any) {
    console.log(formValue);
    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };
    this.courses = [...this.courses, data];
    this.setItem(this.courses);
  }

  deleteCourse(course: any) {
    this.courses = this.courses.filter(
      (course_item) => course_item.id != course.id
    );
    this.setItem(this.courses);
  }

  private setItem(data: any) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }
}
