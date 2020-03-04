import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private API_Spotify = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(private http:HttpClient) {
    console.log('Spotify service listo');
    
   }

   getNewRelease(){
       const headers = new HttpHeaders({
          'Authorization' : 'Bearer BQC6VtqK1UgeDlX-FgBAGljIxKI6IfciQBUlCp9_yLtTTa9_uvOsH2Uz41N_mR2jz1Y07mc2dlAgNH5juIA'
       });
        this.http.get(this.API_Spotify, { headers }).subscribe( data => {
            console.log(data);
        });
   }
}
 