import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Character, CharacterResults } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getCharacters(limit?:number, offset?: number, orderBy: string='name', searchName?: string): Observable<Character>{
    const data = searchName ?`&nameStartsWith=${searchName}`:''
    return this._http.get<Character>(`${environment.API}/characters?limit=${limit}&offset=${offset}&orderBy=${orderBy}${data}`)
  }

  getCharacterById(id:string): Observable<CharacterResults>{
    return this._http.get<CharacterResults>(`${environment.API}/characters/${id}`)
  }
}
