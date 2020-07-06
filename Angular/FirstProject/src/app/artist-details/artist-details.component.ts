import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artist']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist: object;
  constructor() { }

  ngOnInit(): void {
  }

}
