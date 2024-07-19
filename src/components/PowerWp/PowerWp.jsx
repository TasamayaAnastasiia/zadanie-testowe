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
                            <img width="93" height="88" src="/images/diamondOne.png" alt="Beautiful image"/>
                            <p className={css.titleInf}>Strategic Planning</p>
                            <p className={css.textInf}>Developing a customized development strategy tailored to your business goals, ensuring sustainable growth and competitive advantage.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <img width="93" height="88" src="/images/diamondTwo.png" alt="Beautiful image"/>
                            <p className={css.titleInf}>Custom Solutions</p>
                            <p className={css.textInf}>Crafting unique themes and plugins that enhance functionality. Tailored designs ensure seamless integration and an exceptional user experience.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <img width="93" height="88" src="/images/diamondThree.png" alt="Beautiful image"/>
                            <p className={css.titleInf}>Quality Assurance</p>
                            <p className={css.textInf}>Ensuring your site is fully tested and optimized for performance. Comprehensive checks and continuous monitoring guarantee a seamless user experience.</p>
                        </div>
                    </li>
                    <li className={css.box}>
                        <div className={css.boxInf}>
                            <img width="93" height="88" src="/images/diamondFour.png" alt="Beautiful image"/>
                            <p className={css.titleInf}>Ongoing Support</p>
                            <p className={css.textInf}>Providing continuous updates and support to keep your site running smoothly. Our dedicated team is always available to address any issues and ensure optimal performance.</p>
                        </div>
                    </li>
                </ul>

                <h2 className={css.fourTitle}>As you can see for yourself, we<br/> always get the best results</h2>

                <div id="offer" className={css.boxDiagram}>
                    <img src="/images/diagram.png" alt="Diagram for result after using WordPress"/>

                    <ul className={css.listProcent}>
                        <li>
                            <p>100%</p>
                            <p>Design fidelity with your original graphic design.</p>
                        </li>
                        <li>
                            <p>98%</p>
                            <p>Client satisfaction rate with our services.</p>
                        </li>
                        <li>
                            <p>100+</p>
                            <p>Of successful WordPress projects completed.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};