import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ISoftProjectDetails } from '../../models/soft-project.interface'

@Component({
  selector: 'app-soft-project-details',
  templateUrl: './soft-project-details.component.html',
  styleUrls: ['./soft-project-details.component.scss'],
})
export class SoftProjectDetailsComponent implements OnInit {

  slides: string[];

  disabled: boolean = false;

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    breakpoints: {
      768: {
        slidesPerView: 1.7,
        spaceBetween: 5,
        pagination: false,
        freeMode: true,
      },
    }
  };

  project: ISoftProjectDetails;
  github: string;
  website: string;

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const headline = this.route.snapshot.paramMap.get("headline");
    this.dataService.getSoftProjectDetails(headline).subscribe(res => {
      this.project = res.details;
      this.slides = res.details.images;
      this.github = res.github;
      this.website = res.website;
    });
  }
}
