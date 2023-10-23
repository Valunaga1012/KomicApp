import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterData } from 'src/app/core/models/character.interface';
import { Navigation } from 'src/app/core/routers/navegation.enum';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  alphabeticalOrder: string = 'name';
  chararecterData!: CharacterData;
  offset: number = 0;
  limit: number = 20;
  currentPage = 1;
  searchTerm!: string;

  constructor(
    private _chararecter: CharactersService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getChararecters();
  }

  public getChararecters(currentPage: number = 1): void {
    this._chararecter
      .getCharacters(
        this.limit,
        (currentPage - 1) * this.limit,
        this.alphabeticalOrder,
        this.searchTerm
      )
      .subscribe((response: any) => {
        this.chararecterData = response.data;
      });
  }

  public characterDetail(id: number): void {
    this._router.navigate([Navigation.DASHBOARD, id]);
  }
}
