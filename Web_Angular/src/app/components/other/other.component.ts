import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Customer {
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  registeredUsers: string[] = [];

  customerArray: Customer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
}