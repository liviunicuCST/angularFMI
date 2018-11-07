import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params['id']
    })
  }

}
