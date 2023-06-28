import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconRegistry, MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const matModules: any[] = [
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatInputModule, MatFormFieldModule,MatSelectModule, MatMenuModule, 
  MatTabsModule, MatSidenavModule, MatAutocompleteModule,
]



@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {  
  }

