import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ISoftProjectDetails } from '../../models/soft-project.interface'

@Component({
  selector: 'app-elec-project-details',
  templateUrl: './elec-project-details.component.html',
  styleUrls: ['./elec-project-details.component.scss']
})
export class ElecProjectDetailsComponent implements OnInit {

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
    lazy: true,
    breakpoints: {
      768: {
        slidesPerView: 1.7,
        spaceBetween: 5,
        pagination: false,
        freeMode: true,
      },
    }
  };

  // private scrollbar: SwiperScrollbarInterface = {
  //   el: '.swiper-scrollbar',
  //   hide: false,
  //   draggable: true
  // };

  // private pagination: SwiperPaginationInterface = {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   hideOnClick: false
  // };
  project: ISoftProjectDetails;

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const headline = this.route.snapshot.paramMap.get("headline");
    this.dataService.getElectronicProjectDetails(headline).subscribe(res => {
      this.project = res;
      this.slides = res.images;
    });
    // this.project.subscribe(res => console.log(res.title))
  }

}