import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  model: any = {};
  cover!: string;
  cover_file: any;
  showError = false;

  saveCourse(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log('Formulaire invalide');
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
      return;
    }

    console.log(form.value);
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
}
