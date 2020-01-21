import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvtechTextInputModule } from './components/advtech-text-input/advtech-text-input.module';
import { ExamplePageComponent } from './components/example-page/example-page.component';
import { PanelModule } from './components/panel/panel.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AdvtechTextareaInputModule } from './components/advtech-textarea-input/advtech-textarea-input.module';


const appRoutes: Routes = [
 {path: '', component: ExamplePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    PanelModule,
    AdvtechTextInputModule,
    AdvtechTextareaInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
