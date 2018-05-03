import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { CustomRouterStateSerializer } from './shared/utils';

import { EffectsModule } from '@ngrx/effects';
import { Effects } from './effects';

import { Services } from './services';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { ProductContainerComponent } from './products/product-container/product-container.component';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { OrderContainerComponent } from './orders/order-container/order-container.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'products', component: ProductContainerComponent },
  { path: 'orders', component: OrderContainerComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardContainerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    ProductContainerComponent,
    OrderContainerComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(Effects)
  ],
  providers: [
    ...Services,
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
