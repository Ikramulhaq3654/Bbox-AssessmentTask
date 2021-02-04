import { UsersService } from './../services/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() modal: any;

  public addUserForm: FormGroup;

  constructor(private _fb: FormBuilder, private _service: UsersService) { }

  ngOnInit() {
    this.addUserForm = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      address: [''],
      phone: [''],
      website: [''],
      company: ['']
    });
  }

  onSubmit() {
    this._service.addUser(this.addUserForm.value).subscribe();
    this.modal.close();

  }

}
