import { Component, OnInit } from '@angular/core';
import { DrinkComponent } from '../../drink/drink.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [DrinkComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
