import { NgModule } from '@angular/core';
import { FindFilterPipe } from "./excerpt.pipe";
@NgModule({
  declarations: [
    FindFilterPipe,
  ],
  exports: [
    FindFilterPipe,
  ],
  providers: [
    FindFilterPipe,
  ]
})
export class CommonPipesModule { }