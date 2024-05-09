import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostDto } from 'src/app/services/models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  loading: boolean = false;
  @Output() savePost: EventEmitter<PostDto> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: this.fb.control(''),
      body: this.fb.control('')
    });
  }

  addPost() {
    this.savePost.emit(this.postForm.value);
  }
}
