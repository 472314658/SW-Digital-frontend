import {Component, ElementRef, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {UserInfoService} from '../../../core/services/user-info';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }


}
