import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './Star/star.component';
import { HttpDataService } from "./Http/http-data.service";

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        StarComponent
    ],
    providers: [HttpDataService],
    declarations: [StarComponent],
})
export class SharedModule { }