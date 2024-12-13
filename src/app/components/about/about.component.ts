import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  router = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
  }
}
