import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookCrudService } from './../services/book-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  bookForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private bookCrudService: BookCrudService
  ) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      author: [''],
      editorial: [''],
      img_url:['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.bookForm.valid) {
      return false;
    } else {
      this.bookCrudService.createBook(this.bookForm.value)
        //error aqui
      .subscribe((response) => {
          this.zone.run(() => {
            this.bookForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}