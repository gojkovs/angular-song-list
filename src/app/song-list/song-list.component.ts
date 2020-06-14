import { Component } from "@angular/core";
import { SongService } from "../services/song.service";
import { Song } from "../models/song";

@Component({
  selector: 'song-list',
  templateUrl: 'song-list.component.html',
  styleUrls: ['song-list.component.css']
})
export class SongListComponent {

constructor(
  public songService: SongService
){}

ngOnInit(){
  this.songService.getAllSongs();
}

chosenSong:Song;

chooseSong(song){
this.chosenSong=song;
}
}