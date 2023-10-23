import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterData } from 'src/app/core/models/character.interface';

@Component({
  selector: 'komic-paginator',
  templateUrl: './komic-paginator.component.html',
  styleUrls: ['./komic-paginator.component.scss']
})
export class KomicPaginatorComponent implements OnInit {

  @Input() data!: CharacterData;
  @Input() currentPage!: number;
  @Input() limit!:number;
  totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.calculateTotalPage()
  }

  private calculateTotalPage(){
    this.totalPages = Math.ceil(this.data?.total / this.limit);
  }

  public nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
