import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface, SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IElecProjectDetails } from '../../models/elec-project.interface'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

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

  project: IElecProjectDetails;
  video: SafeResourceUrl;
  subscription: Subscription;

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const headline = this.route.snapshot.paramMap.get("headline");
    this.subscription = this.dataService.getElectronicProjectDetails(headline).subscribe(res => {
      this.project = res;
      this.slides = res.images;
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.video);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
