import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SongService } from './services/song.service';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule }  from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatCardModule, MatListModule, MatDividerModule, FlexLayoutModule ],
  declarations: [ AppComponent, SongListComponent,  SongDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ SongService ]
})
export class AppModule { }
