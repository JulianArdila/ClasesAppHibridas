import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  birthday: string;
  cc: number;

  constructor(
    private service: UserService,
    private storage: Storage,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  async saveUser(formData) {
    console.log('saveUser');
    if (!formData.valid) return;
    console.log('Guardo');
    let data = await this.service.registerUser({
      username: this.username,
      password: this.password,
      birthday: this.birthday
    });
    console.log(data);
    let token = await this.service.login({
      username: this.username,
      password: this.password
    })
    await this.storage.set('token', token['key'])
    this.navController.navigateRoot('/home')
  }

}
