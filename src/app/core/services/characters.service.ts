import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getCharacters(limit?:number, offset?: number, orderBy: string='name', searchName?: string){
    const data = searchName ?`&nameStartsWith=${searchName}`:''
    return this._http.get(`${environment.API}/characters?limit=${limit}&offset=${offset}&orderBy=${orderBy}${data}`)
  }

  getCharacterById(id:string){
    return this._http.get(`${environment.API}/characters/${id}`)
  }
}
