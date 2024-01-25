import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperatorComponent } from './pages/operator/operator.component';
import { Operator2Component } from './pages/operator2/operator2.component';
import { RtlWrapperComponent } from './rtl-wrapper/rtl-wrapper.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'operator', component: OperatorComponent },
    { path: 'operator2', component: Operator2Component },
    { path: '', redirectTo: 'home', pathMatch: 'full'  },
    {
        path: 'rtl',
        component: RtlWrapperComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'operator', component: OperatorComponent },
            { path: 'operator2', component: Operator2Component },
            { path: '', redirectTo: 'home', pathMatch: 'full'  },
        ]
    }
];
