import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  currentRoute: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      // Extract the current route path
      this.currentRoute = url[0].path;
    });
  }
}
