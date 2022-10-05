import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BookCrudService } from './../services/book-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateBookFg: FormGroup;
  id: any;
 

  constructor(
    private bookCrudService: BookCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  
  }

  ngOnInit() {
    this.fetchBook(this.id);
    this.updateBookFg = this.formBuilder.group({
      name: [''],
      author: [''],
      editorial: [''],
      img_url:['']
    })
  }

  fetchBook(id) {
    this.bookCrudService.getBook(id).subscribe((data) => {
      this.updateBookFg.setValue({
        name: data['name'],
        author: data['author'],
        editorial: data['editorial'],
        img_url: data ['img_url']
      });
    });
  }

  onSubmit() {
    if (!this.updateBookFg.valid) {
      return false;
    } else {
      this.bookCrudService.updateBook(this.id, this.updateBookFg.value)
      .subscribe(() => {
          this.updateBookFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
