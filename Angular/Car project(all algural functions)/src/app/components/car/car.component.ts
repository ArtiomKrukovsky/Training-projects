import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean;

  constructor() { }

  ngOnInit(){
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8',
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }
    this.options = ["Cruss Control", "Parking"]
  }

  addOption(option){
    this.options.unshift(option);
    return false;
  }

  deleteOption(index){
    console.log(index);
    if (index > -1) {
      this.options.splice(index, 1);
    }
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  carSelect(carName){
    if(carName == 'bmw'){
      this.name = 'BMW';
        this.speed = 280;
        this.model = 'M5',
        this.colors = {
          car: 'Blue',
          salon: 'Black',
          wheels: 'Silver'
        }
        this.options = ["ABS", "Parking"]
    }
    else if(carName == 'audi'){
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8',
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      }
      this.options = ["Cruss Control", "Parking"]
    }
    else if(carName == 'mercedes'){
        this.name = 'Mercedes';
        this.speed = 180;
        this.model = 'C180',
        this.colors = {
          car: 'White',
          salon: 'Black',
          wheels: 'Silver'
        }
        this.options = ["ABS", "Parking"]
    }
  }
}

interface Colors{
  car: string,
  salon: string,
  wheels: string
}
