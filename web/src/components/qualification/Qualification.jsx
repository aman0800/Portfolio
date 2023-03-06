import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button   button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>  Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> {" "}  Experience

                </div>


            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">Banaras Hindu University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">B.Sc </h3>
                            <span className="qualification__subtitle">Doon University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> 2018 - 2021
                            </div>
                        </div>

                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Devlopment Internship</h3>
                            <span className="qualification__subtitle">The Sparks Foundation</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> Oct 2021 - Nov 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Graphic Designer</h3>
                            <span className="qualification__subtitle">BHU Tech Fest</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt">
                                </i> Sept 2022 - Oct 2022
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification