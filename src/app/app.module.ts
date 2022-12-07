import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ScrollingModule],
  declarations: [AppComponent, EntriesComponent, EntryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
