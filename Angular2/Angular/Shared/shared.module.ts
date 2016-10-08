import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './Star/star.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        StarComponent
    ],
    declarations: [StarComponent],
})
export class SharedModule { }