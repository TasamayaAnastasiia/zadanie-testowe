import css from "./AboutWp.module.css";
import { BoxAbs } from "../BoxAbs/BoxAbs";

export const AboutWp = () => {
    return (
        <section className={css.sectionTwo}>

            <BoxAbs />
            
            <div className={css.container}>
                <h2 className={css.titleTwo}>Why do you need WordPress<br/> Development?</h2>

                <ul className={css.listTwo}>
                    <li>
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/images/dlugopis-mob.png" />
                            <source media="(max-width: 1440px)" srcSet="/images/dlugopis.png" />
                            <img src="/images/dlugopis.png" alt="Custom Design Implementation" />
                        </picture>

                        <div className={css.boxText}>
                            <p className={css.optionList}>Custom Design Implementation</p>
                            <p className={css.paragraf}>Ensure your website looks exactly as your designer envisioned.</p>
                        </div>
                    </li>
                    <li>
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/images/arrow-mob.png" />
                            <source media="(max-width: 1440px)" srcSet="/images/arrow.png" />
                            <img src="/images/arrow.png" alt="Tailored Solutions" />
                        </picture>

                        <div className={css.boxText}>
                            <p className={css.optionList}>Tailored Solutions</p>
                            <p className={css.paragraf}>Create bespoke plugins and functionalities that meet your specific needs.</p>
                        </div>
                    </li>
                    <li>
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/images/diagram-mob.png" />
                            <source media="(max-width: 1440px)" srcSet="/images/diagram.png" />
                            <img src="/images/diagram.png" alt="Optimization and Performance" />
                        </picture>

                        <div className={css.boxText}>
                            <p className={css.optionList}>Optimization and Performance</p>
                            <p className={css.paragraf}>Get a fast, secure, and optimized website for the best user experience.</p>
                        </div>
                    </li>
                    <li>
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/images/arroww-mob.png" />
                            <source media="(max-width: 1440px)" srcSet="/images/arroww.png" />
                            <img src="/images/arroww.png" alt="Continuous Growth" />
                        </picture>

                        <div className={css.boxText}>
                            <p className={css.optionList}>Continuous Growth</p>
                            <p className={css.paragraf}>Easily update and expand your site as your business grows.</p>
                        </div>
                    </li>
                </ul>

            </div>
            
            <svg className={css.oneSvg} width="41" height="42" viewBox="0 0 41 42" fill="none" >
                <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
            </svg>
            <svg className={css.twoSvg} width="41" height="42" viewBox="0 0 41 42" fill="none" >
                <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
            </svg>
            <svg className={css.threeSvg} width="41" height="42" viewBox="0 0 41 42" fill="none" >
                <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
            </svg>
        </section>
    )
};