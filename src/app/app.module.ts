import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { ProductContainerComponent } from './products/product-container/product-container.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductContainerComponent },
  { path: 'hero/:id',      component: DashboardContainerComponent },
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    data: { title: 'Heroes List' }
  },
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
    ProductContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
