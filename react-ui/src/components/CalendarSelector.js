import React, { useState } from 'react';
import CalendarTypeSelector from './CalendarTypeSelector';
import TodaySelector from './TodaySelector';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

const CalendarSelector = () => {
    const [monthMenuOpen, setMonthMenuOpen] = useState('');
    const [yearMenuOpen, setYearMenuOpen] = useState('');

    const onMonthMenuChange = (menuOpen) => {
        alert(menuOpen);
        if (monthMenuOpen === menuOpen) {
            setMonthMenuOpen('');
        } else {
            setYearMenuOpen('');
            setMonthMenuOpen(menuOpen);
        }
    };

    const onYearMenuChange = (menuOpen) => {
        if (yearMenuOpen === menuOpen) {
            setYearMenuOpen('');
        } else {
            setMonthMenuOpen('');
            setYearMenuOpen(menuOpen);
        }
    };

    return (
        <div className="calendar-selector__wrapper content-container">
            <div className="date-selector__wrapper">
                <TodaySelector />
                <MonthSelector monthMenuOpen={monthMenuOpen} onMonthMenuChange={onMonthMenuChange} />
                <YearSelector yearMenuOpen={yearMenuOpen} onYearMenuChange={onYearMenuChange} />
            </div>
            <CalendarTypeSelector />
        </div>
    );
};

export default CalendarSelector;