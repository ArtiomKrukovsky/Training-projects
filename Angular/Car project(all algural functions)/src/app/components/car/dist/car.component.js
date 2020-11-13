"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarComponent = void 0;
var core_1 = require("@angular/core");
var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () {
        this.name = 'Audi';
        this.speed = 235;
        this.model = 'RS8',
            this.colors = {
                car: 'White',
                salon: 'Black',
                wheels: 'Silver'
            };
        this.options = ["Cruss Control", "Parking"];
    };
    CarComponent.prototype.addOption = function (option) {
        this.options.unshift(option);
        return false;
    };
    CarComponent.prototype.deleteOption = function (index) {
        console.log(index);
        if (index > -1) {
            this.options.splice(index, 1);
        }
    };
    CarComponent.prototype.showEdit = function () {
        this.isEdit = !this.isEdit;
    };
    CarComponent.prototype.carSelect = function (carName) {
        if (carName == 'bmw') {
            this.name = 'BMW';
            this.speed = 280;
            this.model = 'M5',
                this.colors = {
                    car: 'Blue',
                    salon: 'Black',
                    wheels: 'Silver'
                };
            this.options = ["ABS", "Parking"];
        }
        else if (carName == 'audi') {
            this.name = 'Audi';
            this.speed = 235;
            this.model = 'RS8',
                this.colors = {
                    car: 'White',
                    salon: 'Black',
                    wheels: 'Silver'
                };
            this.options = ["Cruss Control", "Parking"];
        }
        else if (carName == 'mercedes') {
            this.name = 'Mercedes';
            this.speed = 180;
            this.model = 'C180',
                this.colors = {
                    car: 'White',
                    salon: 'Black',
                    wheels: 'Silver'
                };
            this.options = ["ABS", "Parking"];
        }
    };
    CarComponent = __decorate([
        core_1.Component({
            selector: 'app-car',
            templateUrl: './car.component.html',
            styleUrls: ['./car.component.css']
        })
    ], CarComponent);
    return CarComponent;
}());
exports.CarComponent = CarComponent;
