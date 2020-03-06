import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any [] = [];
  loading:boolean;

  error:boolean;
  mensajeError: string;

  constructor( private spotify:SpotifyService ) {

      this.loading = true;
      this.error = false;
      this.spotify.getNewRelease()
        .subscribe( (data:any) => {
            this.nuevasCanciones = data;
            this.loading = false;
        }, ( errorServicio ) => {
          this.loading = false;
          this.error =true;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
          
        });
      
   }

  ngOnInit(): void {
  }
}
