import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
// import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { OjasService } from './ojas.service';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [OjasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
