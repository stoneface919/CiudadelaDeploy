import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Mis Compras',
      url: '/compras',
      icon: 'cart'
    },
    {
      title: 'Mi cuenta ',
      url: '/perfil',
      icon: 'person-circle'
    },
    {
      title: 'Ofertas',
      url: '/ofertas',
      icon: 'bookmark'
    },
    {
      title: 'Notificaciones',
      url: '/notificaciones',
      icon: 'notifications'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'list'
    },
    {
      title: 'Mi tienda',
      url: '/mi-tienda',
      icon: 'business'
    }
    ,
    {
      title: 'Historial',
      url: '/historial',
      icon: 'time'
    },
    {
      title: 'Configuraciones',
      url: '/settings',
      icon: 'settings'
    }
  ];
  public labels = ['Ayuda'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/inicio')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
