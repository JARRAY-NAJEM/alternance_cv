import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IAmComponent } from './i-am/i-am.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PlusComponent } from './plus/plus.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IAmComponent,
    ServicesComponent,
    AboutComponent,
    PlusComponent,
    ContactComponent,
    FooterComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
