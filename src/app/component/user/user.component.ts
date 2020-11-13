import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public persons: Person[] = [];


  constructor() { }

  ngOnInit(): void {
    const user: Person = {
      firstName: 'Artur',
      lastName: 'Boratyński'
    };

    const user1: Person = {
      firstName: 'Edyta',
      lastName: 'Nowicka'
    };
    this.persons.push(user, user1);
  }

  ngOnDestroy(): void {
  }

}
