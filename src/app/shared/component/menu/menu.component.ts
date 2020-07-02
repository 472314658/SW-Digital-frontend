import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../core/services/data.service';
import {MENU_LISTS} from '../../../core/constants/menu-list.contstants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  public isCollapsed = false;
  public menuList = [];
  public menuShow = [];

  ngOnInit(): void {



  }

}
