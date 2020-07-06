import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(artist){
    this.query = artist.name;
    artist.highlight = !artist.highlight;
    this.currentArtist = artist;
  }
  
  constructor(private http: HttpClient){
    this.query = '';
  }

  ngOnInit(): void{
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.artists = data;
    })
  }
}
