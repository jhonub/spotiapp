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
          'Authorization' : 'Bearer BQBWTdcgZq0bnOpu-a9x2ZgFPxEvuAJ0AMRW82Z_9So5uIPfKdkXlGJ-yYFpq18Vye6iWwL9i-v-mweWhAU'
       });
      return this.http.get(this.API_Spotify, { headers });
        
   }
}
 