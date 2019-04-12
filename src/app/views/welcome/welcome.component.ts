import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../models/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
   // loginJSON: JSON
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }




}
