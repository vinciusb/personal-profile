import React, { useState } from 'react';
import { HomePageProps } from '../../../interfaces/interface';
import { Icon } from '@blueprintjs/core';

import './HomePage.scss';
import ProgressIndicator from '../../ProgressIndicator/ProgressIndicator';
import Experience from '../../Experience/Experience';

const contacts = [
    {
        svg: (
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        link: 'https://www.linkedin.com/in/vin%C3%ADcius-braga-bb26b5201/',
        title: 'LinkedIn',
    },
    {
        svg: (
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        link: 'https://github.com/vinciusb',
        title: 'Github',
    },
    {
        svg: <Icon className="icon" icon="envelope" />,
        link: 'vinicius.braga.freire@gmail.com',
        title: 'E-mail',
    },
];

const HomePage: React.FC<HomePageProps> = ({ className }: HomePageProps) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const ID = Number(e.currentTarget.attributes[0].value);
        navigator.clipboard.writeText(contacts[ID].link).then(() => null);
    };

    const renderContacts = (): JSX.Element[] => {
        const list: JSX.Element[] = [];
        contacts.forEach((contact, id) => {
            list.push(
                <div key={id} id={String(id)} className="contact-box" onClick={handleClick}>
                    {contact.svg}
                    <h1>{contact.title}</h1>
                    <div className="copy-div">Click to copy</div>
                </div>,
            );
        });
        return list;
    };

    return (
        <div className={'home-page ' + className}>
            <div className="intro secao">
                <div className="img">
                    <div />
                    <div />
                    <div />
                </div>
                <div className="info">
                    <h1>Vinícius Braga Freire</h1>
                </div>
                <div className="bgEffect">
                    <div />
                    <div />
                </div>
            </div>

            <div className="facts secao">
                <div className="about-me">
                    <h1>About me</h1>
                    <div className="main-container">
                        <div className="info">
                            <img src={require('../../../imgs/aboutme/location.png')} alt="Brazilian flag" />
                            <p>Belo Horizonte, Brazil</p>
                        </div>
                        <div className="info">
                            <img src={require('../../../imgs/aboutme/age.png')} alt="Age icon" />
                            <p>20 years</p>
                        </div>
                        <div className="info">
                            <img src={require('../../../imgs/aboutme/education.png')} alt="Info icon" />
                            <p>B.S. in Information Systems @ UFMG</p>
                        </div>
                        <div className="info">
                            <img src={require('../../../imgs/aboutme/work.png')} alt="Work icon" />
                            <p>Undergraduate Researcher in Satisfatability Modulo Theories @ UFMG</p>
                        </div>
                    </div>
                </div>
                <div className="experiences">
                    <h1>Previous Experiences</h1>
                    <div className="main-container">
                        <Experience
                            title="Back-end Developer"
                            subTitle="Internship"
                            period="08/23 - Now"
                            description={[
                                'Worked on the Solutions Architecture team, whose objective is to create new architectures and implementations for legacy parts of the enterprise product.',
                                'Mainly focused on the refactorization and creation of new .NET web APIs with a focus on better performance and scalability.',
                                'Creation of new data injection and treatment pipelines for large amounts of data in the mobile internet market using Spark.',
                            ]}
                            location="Bwtech"
                            img={<img src={require('../../../imgs/experiences/bwtech.jpeg')} />}
                        />
                        <Experience
                            title="Parallelization and Augmentation for SMT Solver Verifier"
                            subTitle="Undergraduate Researcher"
                            period="12/22 - 07/23"
                            description={[
                                'Worked on the parallelization of Carcará, an SMT proofs verification and elaboration tool based on graphs.',
                            ]}
                            location="UFMG"
                            img={<img src={require('../../../imgs/experiences/ufmg.png')} />}
                        />
                        <Experience
                            title="Web Visualizer for SMT Solver Proofs"
                            subTitle="Undergraduate Researcher"
                            period="11/21 - 11/22"
                            description={[
                                'Project whose objective is to provide customizable views through graphs and tables to improve the comprehension of the proofs and the operation of SMT solvers, particularly the cvc5.',
                                'Developed the visualizer in TypeScript using the React and Redux libraries.',
                                'Contributed to the open-source system cvc5 implementing updates in the print and traverse of the proofs, in addition to a Web Assembly compilation method, allowing the solver to run in web browsers.',
                            ]}
                            location="UFMG"
                            img={<img src={require('../../../imgs/experiences/ufmg.png')} />}
                        />
                        <Experience
                            title="Computacional Vision applied to Automation"
                            subTitle="Undergraduate Researcher"
                            period="08/18 - 07/19"
                            description={[
                                'Multidisciplinary project whose objective is to apply computer vision techniques, using low-cost hardware (Raspberry Pi), for industrial automation.',
                                'Developed a system and your interface in Python to control the quality of cookies on a production belt using the computer vision techniques learned during the project. Also integrated the software with the electric part of the system.',
                                "Documented the process, techniques used and the project's evolution in a logbook and final report.",
                            ]}
                            location="CEFET-MG"
                            img={<img src={require('../../../imgs/experiences/cefetmg.jpg')} />}
                        />
                    </div>
                </div>
                <div className="idioms">
                    <h1>Languages</h1>
                    <div className="main-container">
                        <ProgressIndicator
                            title="Portuguese"
                            className="idiom"
                            angle={210}
                            colors={['rgba(255, 224, 51, 0.856)', 'rgb(39, 140, 255, 0.7)', 'rgb(100, 255, 39, 0.6)']}
                            nSec={10}
                            percentage={1}
                            dividerWidth={3}
                        >
                            <img src={require('../../../imgs/brazil-flag.png')} alt="Brazillian flag" />
                        </ProgressIndicator>
                        <ProgressIndicator
                            title="French"
                            className="idiom"
                            angle={210}
                            colors={['rgb(15, 39, 255, 0.7)', 'rgb(255, 255, 255)', 'rgb(255, 20, 20)']}
                            nSec={10}
                            percentage={0.4}
                            dividerWidth={3}
                        >
                            <img src={require('../../../imgs/france-flag.png')} alt="French flag" />
                        </ProgressIndicator>
                        <ProgressIndicator
                            title="English"
                            className="idiom"
                            angle={210}
                            colors={['rgb(255, 20, 20, 0.65)', 'rgb(255, 255, 255)', 'rgb(15, 39, 255, 0.7)']}
                            nSec={10}
                            percentage={0.8}
                            dividerWidth={3}
                        >
                            <img src={require('../../../imgs/uk-flag.png')} alt="Brittish flag" />
                        </ProgressIndicator>
                    </div>
                </div>
            </div>

            <div className="contact secao">
                <h1>Contact Me</h1>
                <div className="contacts">{renderContacts()}</div>
            </div>
        </div>
    );
};

export default HomePage;
