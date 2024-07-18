import css from "./Hero.module.css";

export const Hero = () => {
    return (
        <section id="contact" className={css.sectionOne}>
            <div className={css.container}>
                <h1 className={css.mainTitle}>Elevate Your Digital Presence With Our <br/> <span className={css.words}>Full-Service WordPress Development</span></h1>
                <p className={css.paragraf}>Take your website to the next level with Klaarity. Our team of experts will transform your design into a fully functional WordPress site that delivers results.</p>
                <button type="button" className={css.butCall}>
                    <div className={css.boxBut}>
                            <p>Book a call</p>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464467C8.97631 0.269205 8.65973 0.269205 8.46447 0.464467C8.2692 0.659729 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM-4.37114e-08 4.5L12 4.5L12 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white" />
                            </svg>
                    </div>
                </button>

                <div className={css.boxCompany}>

                        <p className={css.text}>Trusted by</p>

                        <ul className={css.listCompany}>
                            <li>
                                <a href="https://smack.no/" target="blank"><img src="/src/images/smack.png" alt="Logo company-partner"/></a>
                            </li>
                            <li>
                                <a href="https://thezishi.com/" target="blank"><img src="/src/images/zishi.png" alt="Logo company-partner"/></a>
                            </li>
                            <li>
                                <a href="https://www.share50.no/" target="blank"><img src="/src/images/share.png" alt="Logo company-partner"/></a>
                            </li>
                        </ul>

                </div>

            </div>
        </section>
    )
};