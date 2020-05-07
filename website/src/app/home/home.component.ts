import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../shared/j-query.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  ngOnInit(): void {

    let $slickFrame = this.$('#slider');

    $slickFrame.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '33%',
      draggable: true,
      arrows: true,
      swipeToSlide: true,
      dots: true,
      infinite: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            centerPadding: '20%',
            arrows: false
          }
        }

      ]
    });
  }

}
