import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete.component';
import { APILoader } from "../entity/apiloader";
import { AutocompleteService } from "./service/autocomplete.service";

/** AutoCompleteModule
 *  Use setProjectAPI method to include this module
 *  into your project
 */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutoCompleteComponent],
  providers: [AutocompleteService,APILoader]
})
export class AutoCompleteModule {
  static setProjectAPI(apiKey: string){
    APILoader.apiKey=apiKey;
    return {
      ngModule : AutoCompleteModule,
      providers: [AutocompleteService]
    }
  }
}
