import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private API_Spotify = 'https://api.spotify.com/v1';

  constructor(private http:HttpClient) {
    console.log('Spotify service listo');
    
   }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQByPdHwVUvJ6lebIoK3nXSAFZnddTOhEK5-nJPztZ4rbU_VYhHcVJTWZ4ISGUR9eDqx5wnrZnCYpT-SR9A'
    });

    return this.http.get(url, { headers });
  }

   getNewRelease(){
      
    return this.getQuery('browse/new-releases').pipe( map(data => data['albums'].items)); 
        
   }

   getArtista( termino:string ) {
     
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map(data => data['artists'].items ));

   }
}
 