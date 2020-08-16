import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  // convenience getter for easy access to form fields
  get formValue() { return this.signUp.controls; }

  ngOnInit(): void {
    this.signUp = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUp.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.signUp.value).subscribe(
        data => {
          this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error => {
          this.loading = false;
        });
  }

}
