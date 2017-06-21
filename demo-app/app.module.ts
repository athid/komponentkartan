import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core"
import { BrowserModule, Title } from "@angular/platform-browser"

import { FormsModule } from "@angular/forms";

import { KomponentkartanApplicationComponent } from "./app.component";
import { KomponentkartaComponent } from "./komponentkarta/komponentkarta.component"
import { FormatmallComponent } from "./formatmall/formatmall.component"
import { FargkartaComponent } from "./fargkarta/fargkarta.component"
import { MenuSelectorComponent } from "./menuSelector/menuSelector.component"
import { KomponentkartanModule } from "../component-package/komponentkartan.module";
import { RouterModule, Routes } from "@angular/router"
import { appRoutes } from "./routes"


@NgModule({
    imports: [
        KomponentkartanModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    declarations: [
        KomponentkartanApplicationComponent,
        KomponentkartaComponent,
        FormatmallComponent,
        FargkartaComponent,
        MenuSelectorComponent
    ],

    bootstrap: [KomponentkartanApplicationComponent]
})
export class AppModule { }