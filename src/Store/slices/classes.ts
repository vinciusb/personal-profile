import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { ClassState } from '../../interfaces/interface';

const initialState: ClassState = {
    last: 4,
    periods: {
        1: {
            semester: '2020/2',
            classes: [
                {
                    name: 'Introduction to the Computational Logic',
                    date: [
                        {
                            day: 'mon',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'wed',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Programming and Software Development I',
                    date: [
                        {
                            day: 'tue',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'thu',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Fundamentals of Information Systems',
                    date: [
                        {
                            day: 'wed',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Analytical Geometry and Linear Algebra',
                    date: [
                        {
                            day: 'tue',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'thu',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'General Theory of Administration',
                    date: [
                        {
                            day: 'fri',
                            hour: [17, 0, 20, 40],
                        },
                    ],
                },
            ],
        },
        2: {
            semester: '2021/1',
            classes: [
                {
                    name: 'Calculus I',
                    date: [
                        {
                            day: 'mon',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'wed',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'fri',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Computational Linear Algebra',
                    date: [
                        {
                            day: 'tue',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'thu',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Discrete Math',
                    date: [
                        {
                            day: 'mon',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'wed',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Programming and Software Development II',
                    date: [
                        {
                            day: 'tue',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'thu',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Economy A - I',
                    date: [
                        {
                            day: 'fri',
                            hour: [19, 0, 22, 30],
                        },
                    ],
                },
            ],
        },
        3: {
            semester: '2021/2',
            classes: [
                {
                    name: 'Calculus II',
                    date: [
                        {
                            day: 'mon',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'wed',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Introduction to Logic Systems',
                    date: [
                        {
                            day: 'mon',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'fri',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Introduction to Databases',
                    date: [
                        {
                            day: 'tue',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'thu',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Data Structures',
                    date: [
                        {
                            day: 'tue',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'thu',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Statistics and Probabilities',
                    date: [
                        {
                            day: 'wed',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'fri',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
            ],
        },
        4: {
            semester: '2022/1',
            classes: [
                {
                    name: 'Data Wharehouse',
                    date: [
                        {
                            day: 'mon',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'wed',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Computer Organization I',
                    date: [
                        {
                            day: 'mon',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'wed',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Information Users',
                    date: [
                        {
                            day: 'tue',
                            hour: [17, 0, 18, 40],
                        },
                        {
                            day: 'thu',
                            hour: [17, 0, 18, 40],
                        },
                    ],
                },
                {
                    name: 'Algorithms I',
                    date: [
                        {
                            day: 'tue',
                            hour: [19, 0, 20, 40],
                        },
                        {
                            day: 'thu',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Human Resources Administration',
                    date: [
                        {
                            day: 'fri',
                            hour: [17, 0, 20, 40],
                        },
                    ],
                },
            ],
        },
        5: {
            semester: '2022/2',
            classes: [],
        },
        6: {
            semester: '2023/1',
            classes: [],
        },
        7: {
            semester: '2023/2',
            classes: [],
        },
        8: {
            semester: '2024/1',
            classes: [],
        },
        9: {
            semester: '2024/2',
            classes: [],
        },
    },
};

export const classSlice = createSlice({
    name: 'classes',
    initialState,

    reducers: {},
});

export const {} = classSlice.actions;

export const selectPeriods = (state: RootState): ClassState => {
    return state.classes;
};

export default classSlice.reducer;
