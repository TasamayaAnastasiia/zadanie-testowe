import { ListProcent } from "./ListProcent/ListProcent";
import css from "./PowerWp.module.css";

export const PowerWp = () => {
    return (
        <section id="about" className={css.sectionThree}>
            <div className={css.container}>
                <h2 className={css.titleThree}>Unlock the power of WordPress with our <span className={css.gradient}>Expert guidance</span></h2>
                <p className={css.paragraf}>With years of experience, our expert team will help you create and manage WordPress sites that drive real results.</p>

                <ul className={css.listInf}>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/images/diamondThree-mob.png" />
                                <source media="(max-width: 1440px)" srcSet="/images/diamondThree.png" />
                                <img src="/images/diamondThree.png" alt="Strategic Plannings" />
                            </picture>

                            <p className={css.titleInf}>Strategic Planning</p>
                            <p className={css.textInf}>Developing a customized development strategy tailored to your business goals, ensuring sustainable growth and competitive advantage.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/images/diamondTwo-mob.png" />
                                <source media="(max-width: 1440px)" srcSet="/images/diamondTwo.png" />
                                <img src="/images/diamondTwo.png" alt="Custom Solutions" />
                            </picture>

                            <p className={css.titleInf}>Custom Solutions</p>
                            <p className={css.textInf}>Crafting unique themes and plugins that enhance functionality. Tailored designs ensure seamless integration and an exceptional user experience.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/images/diamondOne-mob.png" />
                                <source media="(max-width: 1440px)" srcSet="/images/diamondOne.png" />
                                <img src="/images/diamondOne.png" alt="Quality Assurance" />
                            </picture>

                            <p className={css.titleInf}>Quality Assurance</p>
                            <p className={css.textInf}>Ensuring your site is fully tested and optimized for performance. Comprehensive checks and continuous monitoring guarantee a seamless user experience.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/images/diamondFour-mob.png" />
                                <source media="(max-width: 1440px)" srcSet="/images/diamondFour.png" />
                                <img src="/images/diamondFour.png" alt="Ongoing Support" />
                            </picture>

                            <p className={css.titleInf}>Ongoing Support</p>
                            <p className={css.textInf}>Providing continuous updates and support to keep your site running smoothly. Our dedicated team is always available to address any issues and ensure optimal performance.</p>
                        </div>
                    </li>
                </ul>

                <ListProcent/>

            </div>
        </section>
    )
};