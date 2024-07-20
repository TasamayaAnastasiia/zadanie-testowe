import css from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openModalMenu } from "../../redux/slice";
import { menuIsOpen } from "../../redux/constants";
import { NavLinks } from "./Nav/NavLinks.jsx";

export const Header = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(menuIsOpen);

  const handleOpenModal = () => {
    dispatch(openModal(true));
    document.body.style.overflow = "hidden";
  };

  const handleToggleMenu = () => {
    console.log(openMenu);
    if (openMenu) {
      document.body.style.overflow = "scroll";
    console.log("scroll");

    } else {
      document.body.style.overflow = "hidden";
    console.log("hidden");

    }

    dispatch(openModalMenu(!openMenu));
    
    console.log(openMenu);
  };

  return (
      openMenu ? (
        <div className={css.container}>
            <div className={ openMenu ? [css.modalOverlay, css.show].join(" ") : css.modalOverlay}>
              <div className={css.modal}>
                  <NavLinks onClick={() => handleOpenModal()} isOpen={openMenu}/>

                  <svg className={css.closeButton} onClick={handleToggleMenu} width="30" height="30" viewBox="0 0 32 32">
                      <path d="M6.276 4.391l-1.885 1.885 9.724 9.724-9.724 9.724 1.885 1.885 9.724-9.724 9.724 9.724 1.885-1.885-9.724-9.724 9.724-9.724-1.885-1.885-9.724 9.724-9.724-9.724z"></path>
                  </svg>
              </div>
            </div>
        </div>
      ) : 
      (
        <header className={css.header}>
          <div className={css.container}>
            <NavLinks onClick={() => handleOpenModal()} />

            <button className={css.iconBurgerMenu} onClick={handleToggleMenu}>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H20" stroke="white" strokeWidth="2" />
                <path d="M0 6H20" stroke="white" strokeWidth="2" />
                <path d="M0 11H20" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </header>
      )
  );
};
