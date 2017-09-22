
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaypickerComponent } from '../../component-package/controls/daypicker/daypicker.component';

describe('[MonthpickerComponent]', () => {
    let component: DaypickerComponent;
    let currentYear: number;
    let currentMonth: number;

    beforeEach(() => {
        currentYear = 2017;
        currentMonth = 9;
        component = new DaypickerComponent(null);
    });
    describe('When initialized with currentYear 2017 and currentMonth September', () => {
        beforeEach(() => {
            component.ngOnInit();
        });

        it('contains a yearmonth-model with current year', () => {
            expect(component.yearMonths.map(ym => ym.year)[0]).toEqual(currentYear);
        });

        it('contains the current month in the yearmonth model', () => {
            expect(component.yearMonths.filter(ym => ym.month === currentMonth).map(ym => ym.month)[0]).toEqual(currentMonth);
        });

        it('contains 5 weeks in month model', () => {
            expect(component.getNumberOfWeeks(currentYear, currentMonth)).toEqual(5);
        });

        it('contains 5 elements of ICalendarWeeks', () => {
            expect(component.createWeeks(currentYear, currentMonth).length).toEqual(5);
        });

        it('contains correct days in firstWeek of type ICalendarWeeks', () => {
            expect(component.setFirstWeek(currentYear, currentMonth).days[4].day.toDateString()).toBe('Fri Sep 01 2017');
        });

        it('contains correct days in lastWeek of type ICalendarWeeks', () => {
            console.log(component.setLastWeek(currentYear, currentMonth).days[5].day.toDateString());
            expect(component.setLastWeek(currentYear, currentMonth).days[5].day.toDateString()).toBe('Sat Sep 30 2017');
        });


    });
    describe('When initialized with currentYear 2017 and currentMonth October', () => {
        beforeEach(() => {
            currentYear = 2017;
            currentMonth = 10;
            component = new DaypickerComponent(null);
        });

        describe('When initialized with default settings', () => {
            beforeEach(() => {
                component.ngOnInit();
            });

            it('contains a yearmonth-model with current year', () => {
                expect(component.yearMonths.map(ym => ym.year)[0]).toEqual(currentYear);
            });

            it('contains the current month in the yearmonth model', () => {
                expect(component.yearMonths.filter(ym => ym.month === currentMonth).map(ym => ym.month)[0]).toEqual(currentMonth);
            });

            it('contains 6 weeks in month model', () => {
                expect(component.getNumberOfWeeks(currentYear, currentMonth)).toEqual(6);
            });

            it('contains 6 elements of ICalendarWeeks', () => {
                expect(component.createWeeks(currentYear, currentMonth).length).toEqual(6);
            });

            it('contains correct days in firstWeek of type ICalendarWeeks', () => {
                expect(component.setFirstWeek(currentYear, currentMonth).days[6].day.toDateString()).toBe('Sun Oct 01 2017');
            });

            it('contains correct days in lastWeek of type ICalendarWeeks', () => {
                console.log(component.setLastWeek(currentYear, currentMonth).days[0].day.toDateString());
                expect(component.setLastWeek(currentYear, currentMonth).days[1].day.toDateString()).toBe('Tue Oct 31 2017');
            });

        });
    });
});
