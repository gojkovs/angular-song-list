import { Component, Input } from "@angular/core";
import { Song } from "../models/song";

@Component({
  selector: 'song-detail',
  templateUrl: 'song-detail.component.html',
  styleUrls: ['song-detail.component.css']
})

export class SongDetailComponent {
@Input()
song: Song;
}