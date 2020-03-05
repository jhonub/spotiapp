import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private API_Spotify = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(private http:HttpClient) {
    console.log('Spotify service listo');
    
   }

   getNewRelease():Observable<any>{
       const headers = new HttpHeaders({
          'Authorization' : 'Bearer BQCd_8uXPZ11azAf_Ha-Rzh2LooI8sPCxNa6uL2WXwc2HYfVflCHtMCQ2I1Jtf-Ou9CKB85bDDTY-Jkh_-E'
       });
      return this.http.get(this.API_Spotify, { headers });
        
   }

   getArtista( termino:string ) {
      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQCd_8uXPZ11azAf_Ha-Rzh2LooI8sPCxNa6uL2WXwc2HYfVflCHtMCQ2I1Jtf-Ou9CKB85bDDTY-Jkh_-E'
     });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
   }
}
 