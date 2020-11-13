import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
