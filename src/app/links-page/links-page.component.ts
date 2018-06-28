import { LinksService } from './links-page-dependencies/links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit {
  links: Array<string>;
  constructor(private linksService: LinksService) { }

  ngOnInit() {
    this.links = this.linksService.links;
  }

}
