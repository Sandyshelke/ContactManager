import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { RemContactComponent } from './contact/rem-contact/rem-contact.component';
import { DetailContactComponent } from './contact/detail-contact/detail-contact.component';

const routes: Routes = [
    {
        path: 'contact', component: ContactComponent,
        children: [
            { path: 'new', component: NewContactComponent },
            { path: 'edit/:id', component: EditContactComponent },
            { path: 'remove/:id', component: RemContactComponent },
            { path: 'detail', component: DetailContactComponent },
            { path: 'all', component: DetailContactComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
