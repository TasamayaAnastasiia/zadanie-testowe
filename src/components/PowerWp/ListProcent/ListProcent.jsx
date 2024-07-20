import css from "./ListProcent.module.css";

export const ListProcent = () => {
    return (
        <>
            <h2 className={css.fourTitle}>As you can see for yourself, we always get the best results</h2>

                <div id="offer" className={css.boxDiagram}>
                    <img src="/images/imageThree.png" alt="Diagram for result after using WordPress"/>

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
        </>
    )
}