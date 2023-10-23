import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResults } from 'src/app/core/models/character.interface';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public charecterList!: CharacterResults;
  public chararecterId!: string;

  constructor(private _route: ActivatedRoute, private _chararecter:CharactersService) {}

  ngOnInit(): void {
   this.getParams();
  }

  private getParams(){
    this.chararecterId = this._route.snapshot.paramMap.get('id')!;
   this.getChararecter(this.chararecterId)
  }

  private getChararecter(chararecterId: string){
    this._chararecter.getCharacterById(chararecterId).subscribe((response: any)=>{
      this.charecterList = response.data.results[0]
    })
  }
}
