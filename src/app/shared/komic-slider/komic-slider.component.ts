import { HttpResponse } from '@angular/common/http';
import { Component, Input, TemplateRef } from '@angular/core';
import { CarouselService } from 'src/app/core/services/carousel.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IMG_DEFAULT } from 'src/app/core/constants/img-default';
import { TEXT_DEFAULT } from 'src/app/core/constants/text-default';

@Component({
  selector: 'komic-slider',
  templateUrl: './komic-slider.component.html',
  styleUrls: ['./komic-slider.component.scss'],
})
export class KomicSliderComponent {
  @Input() endpoint!: string;
  @Input() sliderHeight!: string;
  @Input() sliderWidth!: string;

  public items: any;
  public imgDefault: string = IMG_DEFAULT;
  private modalRef?: BsModalRef;
  public textDefault: string = TEXT_DEFAULT;

  constructor(
    private _carousel: CarouselService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getSliderData();
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template,{class:'modal-dialog modal-lg'});
  }

  public closeModal(): void {
    this.modalRef?.hide();
  }

  private getSliderData(): void {
    if (this.endpoint) {
      this._carousel
        .getData(this.endpoint)
        .subscribe((response: HttpResponse<any>) => {
          this.items = response.body.data.results;
        });
    }
  }
}
