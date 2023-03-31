import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-couse-list',
  templateUrl: './couse-list.component.html',
  styleUrls: ['./couse-list.component.css']
})
export class CouseListComponent implements OnInit {

  courses: Course[] = []

  ngOnInit(): void {
    this.courses[
      {
        id: 1,
        name : 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'xps-8796',
        duration: 120,
        rating: 5.4,
      }
    ]
  }

}
