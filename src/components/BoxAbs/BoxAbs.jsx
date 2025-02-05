import css from "./BoxAbs.module.css";

export const BoxAbs = () => {
    return (
        <div className={css.thumbBlack}>
            <div className={css.container}>
                <svg className={css.oneSvg} width="41" height="42" viewBox="0 0 41 42" fill="none">
                    <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
                </svg>

                <h2 className={css.titleTwo}>Ready to turn your design<br/> into a high-performance<br/> <span className={css.gradient}>WordPress site?</span></h2>

                <svg className={css.twoSvg} width="41" height="42" viewBox="0 0 41 42" fill="none" >
                    <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
                </svg>

                <svg className={css.threeSvg} width="41" height="42" viewBox="0 0 41 42" fill="none" >
                    <path d="M30.4964 19.6253C25.2713 19.6253 21.0008 15.2698 21.0008 9.94076V0H19.2424V9.94076C19.2424 15.2698 14.9719 19.6253 9.74679 19.6253H0V21.3931H9.74679C14.9719 21.3931 19.2424 25.7486 19.2424 31.0777V41.0184H21.0008V31.0777C21.0008 25.7486 25.2713 21.3931 30.4964 21.3931H40.2432V19.6253H30.4964Z" fill="white" />
                </svg>
            </div>
        </div>
    )
};