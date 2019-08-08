import { Component, OnInit } from '@angular/core';
import { Game } from 'src/Models/game';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private home : HomeService) { }

  ngOnInit() {
    this.doTheThing();
  }

 game1 : Game = {
   name: "Hello Neighbor",
   description: "This is the game",
   tier: 3,
   link: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiMnoTau87jAhUSEawKHbFxCZ4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.recipetineats.com%2Freuben-sandwich-recipe%2F&psig=AOvVaw2PHtjJ4tkcnF-ftPuIP6Ve&ust=1564088994616631"
 }

 game2 : Game = {
  name: "League",
  description: "This is the 2nd game",
  tier: 3,
  link: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjF3-vqu87jAhUEXKwKHXlgCXMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Fgrilled-cuban-sandwich-em-sandwich-cubano-em-364812&psig=AOvVaw3AsZ5VT594wY5s9Axs6C27&ust=1564089030689685"
}

game3 : Game = {
  name: "Cod 2",
  description: "This is the 3rd game",
  tier: 3,
  link: '://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiTx7z1u87jAhUOKa0KHbmaDw0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.mrfood.com%2FSandwiches%2FTouchdown-Torpedoes&psig=AOvVaw2DBce_qZ-AXQXfwx80XmlK&ust=1564089052628736'
}

test : number[] = [1,2,3,4];

games : Array<Game> = [this.game1, this.game2, this.game3];

linkRedirect(link : string){
  window.location.href = link;
}

doTheThing(){
  console.log("okie");
  this.home.getHome();
}



}
