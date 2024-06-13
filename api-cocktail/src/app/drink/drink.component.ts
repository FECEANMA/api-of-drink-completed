import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DrinkInterface } from '../interfaces/drink.interface';

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent implements OnInit{
  drinkList: DrinkInterface[]=[]
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.getDrinks()
  }
  getDrinks(){
    this.apiService.getDrinks().subscribe({
      next: (result) =>{
        this.drinkList = result.drinks;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
