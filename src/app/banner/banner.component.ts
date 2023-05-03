import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) { }

    pcMode: boolean = true;

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) =>{
        console.log(result)
        for(let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){
             if(breakpoint === Breakpoints.HandsetPortrait){
               this.pcMode = false;
             }
            if (breakpoint === Breakpoints.WebLandscape) {
              this.pcMode = true;
            }
          }
        }
      }
    })
  }

}
