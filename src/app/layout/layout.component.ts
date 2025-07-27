import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIcon, MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MatIconModule,MatIcon]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
