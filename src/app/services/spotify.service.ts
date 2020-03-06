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
      'Authorization' : 'Bearer BQD7J4dDv8o_9fivgbWXeyg9sM_xcpS9lmj1lthsT4Im4LKkYO3y7gebZDY99pnGn2gYAYlLgtuMHS3qAkI'
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
 