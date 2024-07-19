import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title: any;

//   constructor(private route:Router){}
//   showForm = false;
//   CreateUsers: any[] = [];
//   CreateObj: any = {
//     Name: '',
//     Mobile: '',
//     Email: '',
//     UserName: '',
//     Password: ''
//   };
//   LoginObj: any = {
//     UserName: '',
//     Password: ''
//   };

//   ngOnInit(): void {
//     if (typeof window !== 'undefined' && window.localStorage) {  
//       const localData = localStorage.getItem('CreateUsers');
//       if (localData != null) {
//         this.CreateUsers = JSON.parse(localData);
//       }
//     }
//   }

//   OnUserCreate() {
//     this.showForm = false;
//     this.CreateUsers.push(this.CreateObj);
//     if (typeof window !== 'undefined' && window.localStorage) {  
//       localStorage.setItem('CreateUsers', JSON.stringify(this.CreateUsers));
//     }
//     alert('User Created Successfully...! You Can Login');
//     this.CreateObj = {
//       Name: '',
//       Mobile: '',
//       Email: '',
//       UserName: '',
//       Password: ''
//     };
//   }

//   OnLogin() {
//     const UserExits = this.CreateUsers.find(m => m.UserName == this.LoginObj.UserName && m.Password == this.LoginObj.Password);
//     if (UserExits != undefined) {
//       alert('User Logged in Successfully');
//       this.route.navigateByUrl('/DisplayData');
//     } else {
//       alert('Invalid Credentials');
//     }
//   }

//   UserCreateForm() {
//     this.showForm = true;
//   }

//   CancleForm() {
//     this.showForm = false;
//   }
}
