import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  inputs:['title']
})
export class NavigationComponent implements OnInit {
  @Input() title: object;

  search: string;
  constructor() { }

  ngOnInit(): void {
  }

}
