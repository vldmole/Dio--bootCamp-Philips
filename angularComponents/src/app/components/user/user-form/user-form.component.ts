import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  @Output() onSave = new EventEmitter<User>();

  //----------------------------------------------------------------------------
  constructor(private formBuilder: FormBuilder)//, private service: UserService)
  {
    this.userForm = this.formBuilder.group(new User());
  }

  //------------------------------------------
  ngOnInit(): void 
  {
    
  }

  //------------------------------------------
  onCancel()
  {
    this.userForm.reset();
  }

  //------------------------------------------
  onSubmit()
  {
    const user = this.userForm.value;
    //this.service.save(user);
    this.onSave.emit(user);
  }

  //------------------------------------------
  setCurrentUser(user: User)
  {
    this.userForm.setValue(user);
  }

  //------------------------------------------
  public getCurrentUser(): User
  {
    return this.userForm.value;
  }

  //------------------------------------------
  public reset(): void
  {
    this.userForm.reset();
  }
}
