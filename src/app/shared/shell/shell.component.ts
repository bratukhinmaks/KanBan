import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  handSet$ = this.breakpoint.observe([Breakpoints.Handset])
    .pipe(
      tap((v) => console.log(v)),
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpoint: BreakpointObserver) {
  }

  ngOnInit() {
  }

}
