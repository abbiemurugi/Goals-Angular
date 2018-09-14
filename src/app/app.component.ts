import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
        new Goal(1,'Watch Finding Nemo','df',new Date()),
        new Goal(2,'Buy Cookies','df',new Date()),
        new Goal(3, 'Get new Phone Case','df',new Date()),
        new Goal(4, 'Get Dog Food','df',new Date()),
        new Goal(5, 'Solve math homework','df',new Date()),
        new Goal(6, 'Plot my world domination plan','df',new Date()),

    ]
}
