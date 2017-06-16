﻿// /// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

// import { ComponentFixture, TestBed, async } from "@angular/core/testing";
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
// import { By } from "@angular/platform-browser";
// import { DebugElement } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { RouterTestingModule } from "@angular/router/testing";
// import { Observable } from "rxjs/Rx";

// import { SidebarMenuComponent } from "../../app/sidebar-menu/sidebar-menu.component";
// import { MenuComponent } from "../../app/sidebar-menu/menu.component";
// import { IMenu, IMenuGroup, IMenuItem } from "../../app/shared/models/menu.model.d";
// import { MenuService } from "../../app/shared/services/menu.service";

// export class MockMenuService {
//     numberOfMenusToReturn: number;

//     constructor() {
//         this.numberOfMenusToReturn = 1;
//     }
//     private getMenusforCurrentUser(numberOfMenus?: string): Observable<IMenu[]> {

//         console.log(this.numberOfMenusToReturn);
//         const allMenus = [] as IMenu[];
//         for (let i = 1; i <= this.numberOfMenusToReturn; i++) {
//             allMenus.push({
//                 title: `Meny ${i}`,
//                 groups: [{
//                     menuItems:
//                     [{
//                         title: `Användare${i}`,
//                         url: `/anvandare${i}`,
//                         favourite: false,
//                         order: "1",
//                         menuItems: [
//                             {
//                                 title: `Användare 1${i}`,
//                                 url: `/anvandare1${i}`,
//                                 favourite: false,
//                                 order: "1"
//                             },
//                             {
//                                 title: `Användare 2${i}`,
//                                 url: `/anvandare2${i}`,
//                                 favourite: false,
//                                 order: "2"
//                             }
//                         ]
//                     }]
//                 } as IMenuGroup]
//             } as IMenu);
//         }

//         return Observable.of(allMenus);
//     }
// }

// describe("SidebarMenuComponent",
//     () => {
//         let component: SidebarMenuComponent;
//         let fixture: ComponentFixture<SidebarMenuComponent>;
//         let rootElement: DebugElement;

//         var mockMenuService = new MockMenuService();

//         beforeEach((done) => {
//             TestBed.resetTestEnvironment();
//             TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
//             TestBed.configureTestingModule({
//                 declarations: [SidebarMenuComponent, MenuComponent],
//                 imports: [CommonModule, RouterTestingModule.withRoutes([])],
//                 providers: [{ provide: MenuService, useFactory: () => { return mockMenuService } }]
//             });

//             TestBed.overrideComponent(SidebarMenuComponent,
//                 {
//                     set: {
//                         templateUrl: "app/sidebar-menu/sidebar-menu.component.html"
//                     }
//                 });

//             TestBed.overrideComponent(MenuComponent,
//                 {
//                     set: {
//                         templateUrl: "app/sidebar-menu/menu.component.html"
//                     }
//                 });

//             TestBed.compileComponents().then(() => {
//                 fixture = TestBed.createComponent(SidebarMenuComponent);
//                 component = fixture.componentInstance;
//                 rootElement = fixture.debugElement;

//                 done();
//             });
//         });

//         describe("When one menu", () => {
//             beforeEach(() => {
//                 mockMenuService.numberOfMenusToReturn = 1;
//                 fixture.detectChanges();
//             });
//             it("sidebar-menu is in single menu mode", () => {
//                 var sidebarMenuElement = rootElement.query(By.css("nav"));
//                 expect(sidebarMenuElement.classes["sidebar-menu--single-menu"]).toBe(true);
//             });
//             it("menu is set to single menu", () => {
//                 expect(component.menuComponents.first.isSingleMenu).toBe(true);
//             });
//         });

//         describe("When two menus", () => {
//             beforeEach(() => {
//                 mockMenuService.numberOfMenusToReturn = 2;
//                 fixture.detectChanges();
//             });

//             it("sidebar-menu is in multiple menu mode", () => {
//                 var sidebarMenuElement = rootElement.query(By.css("nav"));
//                 expect(sidebarMenuElement.classes["sidebar-menu--single-menu"]).toBe(false);
//             });
//             it("menus are not set to single menu", () => {
//                 expect(component.menuComponents.filter(menuComponent => menuComponent.isSingleMenu).length).toBe(0);
//             });

//             describe("and a menu is expanded", () => {
//                 it("scroll is present", () => {
//                     component.menuComponents.first.menu.expanded = true;
//                     fixture.detectChanges();
//                     component.menuComponents.first.onToggleExpand.emit();
//                     fixture.detectChanges();

//                     var sidebarMenuElement = rootElement.query(By.css("nav"));
//                     expect(sidebarMenuElement.children.find(By.css(".scroll-filler"))).toBeTruthy();
//                 });
//             });
//             describe("and no menu is expanded", () => {
//                 it("scroll is not present", () => {
//                     component.menuComponents.forEach(menuComponent => menuComponent.menu.expanded = false);
//                     fixture.detectChanges();
//                     component.menuComponents.first.onToggleExpand.emit();
//                     fixture.detectChanges();

//                     var sidebarMenuElement = rootElement.query(By.css("nav"));
//                     expect(sidebarMenuElement.children.find(By.css(".scroll-filler"))).toBeFalsy();
//                 });
//             });
//             describe("and a submenu is automatically expanded", () => {
//                 it("scroll is present", () => {
//                     component.menuComponents.first.menu.groups[0].menuItems[0].expanded = true;
//                     fixture.detectChanges();
//                     component.menuComponents.first.onToggleExpand.emit();
//                     fixture.detectChanges();

//                     var sidebarMenuElement = rootElement.query(By.css("nav"));
//                     expect(sidebarMenuElement.children.find(By.css(".scroll-filler"))).toBeTruthy();
//                 });
//             });
//             describe("and a submenu is expanded by click", () => {
//                 it("scroll is present", () => {
//                     fixture.debugElement.query(By.css(".menu-item__expander")).parent.triggerEventHandler("click", null);
//                     fixture.detectChanges();

//                     var sidebarMenuElement = rootElement.query(By.css("nav"));
//                     expect(sidebarMenuElement.children.find(By.css(".scroll-filler"))).toBeTruthy();
//                 });
//             });

//         });
//     });


