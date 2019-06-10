import {Component, OnInit} from '@angular/core';
import {transition, trigger, animate, style} from '@angular/animations';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'perx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('init', [
      transition(':enter', [style({
        left: '-100ch',
      }),
        animate('900ms ease-in-out', style({
          left: '0',
        })),
      ]),
      transition(':leave', [
        animate('900ms ease-in-out', style({
          left: '-100ch',
        }))
      ])
    ]),
  ],
})

export class HeaderComponent implements OnInit {
  public showHeader$ = new BehaviorSubject(false);

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else {
            return child;
          }
        }
        return this.route;
      }),
      switchMap(route => route.data)
    ).subscribe(data => {
      if (('showHeader' in data) && this.showHeader$.value !== data.showHeader) {
        this.showHeader$.next(data.showHeader);
      }
    });
  }

}
