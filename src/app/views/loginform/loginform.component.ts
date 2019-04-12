import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../models/services/authentication.service';
import {Login} from '../../models/Login';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.sass']
})
export class LoginformComponent implements OnInit {

  login: Login;
  tusername: string;
  tpassword: string;
  error = '';
  success = '';
  jsonFile: any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {


  }


  onSubmitForm() {

    this.login = new Login(this.tusername, this.tpassword);

    this.auth.store(this.login)
      .subscribe(
        (res: Login) => {

          this.jsonFile = res;
          console.log(res);
          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          // f.reset();
        },
        (err) => this.error = err
      );

    // this.getTeacherLogin();

    }

  getTeacherLogin(): void {
    this.auth.getTeachers().subscribe((result) => {
      // this.loginJSON = [];
      this.jsonFile = result;

      console.log(result);
      /*
      result.map(
        item => {

          if(item.message == 'successful'){

            alert ('login successful');

          }
          else {

            alert ('login unsuccessful');
          }

        }
      );
*/
    });
  }


}
