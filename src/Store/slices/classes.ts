import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { ClassState } from '../../interfaces/interface';

const initialState: ClassState = {
    last: 8,
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
            classes: [
                {
                    name: 'Information Organization and Processing',
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
                    name: 'Programming Languages',
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
                    name: 'Algorithms II',
                    date: [
                        {
                            day: 'tue',
                            hour: [15, 0, 16, 40],
                        },
                        {
                            day: 'thu',
                            hour: [15, 0, 16, 40],
                        },
                    ],
                },
                {
                    name: 'Fundaments of the Computational Theory',
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
                    name: 'Introduction to Accounting',
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
                    name: 'Production Administration',
                    date: [
                        {
                            day: 'fri',
                            hour: [17, 0, 20, 40],
                        },
                    ],
                },
            ],
        },
        6: {
            semester: '2023/1',
            classes: [
                {
                    name: 'Introduction to Data Science',
                    date: [
                        {
                            day: 'mon',
                            hour: [15, 0, 16, 40],
                        },
                        {
                            day: 'wed',
                            hour: [15, 0, 16, 40],
                        },
                    ],
                },
                {
                    name: 'Software Engineering I',
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
                    name: 'Operating System',
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
                    name: 'Algebra A',
                    date: [
                        {
                            day: 'tue',
                            hour: [13, 0, 14, 40],
                        },
                        {
                            day: 'thu',
                            hour: [13, 0, 14, 40],
                        },
                    ],
                },
                {
                    name: 'Compilators I',
                    date: [
                        {
                            day: 'tue',
                            hour: [15, 0, 16, 40],
                        },
                        {
                            day: 'thu',
                            hour: [15, 0, 16, 40],
                        },
                    ],
                },
                {
                    name: 'Machine Learning',
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
            ],
        },
        7: {
            semester: '2023/2',
            classes: [
                {
                    name: 'Software Engineering II',
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
                    name: 'Computers Networks',
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
                    name: 'Compilators I',
                    date: [
                        {
                            day: 'tue',
                            hour: [15, 0, 16, 40],
                        },
                        {
                            day: 'thu',
                            hour: [15, 0, 16, 40],
                        },
                    ],
                },
                {
                    name: 'Ethics at Computation',
                    date: [
                        {
                            day: 'tue',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Computation and Society',
                    date: [
                        {
                            day: 'thu',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Financial Administration',
                    date: [
                        {
                            day: 'fri',
                            hour: [17, 0, 20, 40],
                        },
                    ],
                },
            ],
        },
        8: {
            semester: '2024/1',
            classes: [
                {
                    name: 'Introduction to Artificial Intelligence',
                    date: [
                        {
                            day: 'mon',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Alguma formação livre de 30h',
                    date: [
                        {
                            day: 'wed',
                            hour: [19, 0, 20, 40],
                        },
                    ],
                },
                {
                    name: 'Marketing Administration',
                    date: [
                        {
                            day: 'fri',
                            hour: [17, 0, 20, 40],
                        },
                    ],
                },
            ],
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
