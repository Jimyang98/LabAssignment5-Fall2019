import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CourseComponent } from './course/course.component';



const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'courses',
        component: CourseComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);

