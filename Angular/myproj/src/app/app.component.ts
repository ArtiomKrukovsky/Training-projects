import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  products: object;
  title = 'TechStore';

  constructor(private http: HttpClient){
  }

  public ngOnInit(){
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.products = data;
    })    
  }

  public ngAfterViewInit(){
    $(document).ready(function(){
      $('p.details').each(function(){

        var detailText = $(this).text().trim();

        if(detailText.length > 184){
          $(this).text(detailText.substr(0, 184) + '...');
        }
      });
    });
  }
}
