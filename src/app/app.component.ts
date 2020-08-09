import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngform';

  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('Hello World', Validators.required),
      age: new FormControl(null, Validators.required),
      gender: new FormControl('M', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.http
      .post(
        'https://crypto-spring-boot.herokuapp.com/citizen/add',
        this.form.value
      )
      .subscribe((res) => console.log('%cResponse', 'color:green', res));
  }
}
