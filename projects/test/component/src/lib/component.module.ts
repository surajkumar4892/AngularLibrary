import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigService } from './helper/services/config.service';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class ComponentModule { 
  public static forRoot(): ModuleWithProviders<ComponentModule>
  {
    return {
      ngModule : ComponentModule,
      providers: [
        ConfigService,
      ]
    };
  }
}
