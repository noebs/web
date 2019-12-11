import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
   /// { path: '/dashboard',     title: 'Personal-Info',         icon:'nc-icon nc-single-02',       class: '' },
    { path: '/basic-services',         title: 'Basic-Services',             icon:'nc-bank',    class: '' },
    { path: '/gov-tele',          title: 'Goverment&Telecom',              icon:'nc-icon nc-bullet-list-67',      class: '' }

    ];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
