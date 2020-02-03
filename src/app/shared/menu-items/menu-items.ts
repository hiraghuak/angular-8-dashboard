import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: '/',
        short_label: 'A',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'analytics',
        short_label: 'A',
        name: 'Video Analytics',
        type: 'link',
        icon: 'ti-video-camera'
      }, {
        state: 'category-wise-analytics',
        short_label: 'A',
        name: 'Category Wise Analytics',
        type: 'link',
        icon: 'ti-layout-accordion-list'
      },
      {
        state: 'genres-wise-analytics',
        short_label: 'A',
        name: 'Genres Wise Analytics',
        type: 'link',
        icon: 'ti-layout-grid2-thumb'
      },
      {
        state: 'User Country Wise',
        short_label: 'A',
        name: 'User Country Wise',
        type: 'link',
        icon: 'ti-world'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
