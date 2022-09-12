import classes from "./pageLayout.module.css";
import { Link } from "react-router-dom";
import PopupBg from "../utils/popupbg";
import { useState } from "react";

function PageLayout({ children }) {
  const menus = [
    {
      path: "/",
      page: "home",
    },
    {
      path: "/about",
      page: "about",
    },
    {
      path: "/portfolio",
      page: "portfolio",
    },
    {
      path:'/todo',
      page:'todo'
    },
    {
      path:'/dynamic_form',
      page:'Form'
    }
  ];


  const [minNav,setMinNav] = useState(false)




  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.container}>
          <div className={classes.brand}>
            <h1>unicorn</h1>
          </div>
          <div className={classes.menuIcon} onClick={()=>setMinNav(!minNav)}>
            {" "}
            <i className="fa-solid fa-bars"></i>
          </div>
          <ul className={`${classes.menus} ${minNav?classes.minNav_s:classes.minNav}`}>
            <li className={classes.menuTop}>
              <Link to={"/"}>
                {" "}
                unicorn
              </Link>
              <div className={classes.close } onClick={()=>setMinNav(false)} > <i className="fa-solid fa-xmark"></i></div>
            </li>
            {menus.map((menu) => (
              <li className={classes.li} key={menu.page}>
                <Link className={classes.menu} to={menu.path}>
                  {menu.page}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>{children}</main>
      <PopupBg  />
      <footer className={classes.footer}>
        <h2>this is footer</h2>
      </footer>
    </>
  );
}

export default PageLayout;
