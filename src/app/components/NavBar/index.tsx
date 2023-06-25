"use client";
import { useEffect, useRef, useState } from "react";
import style from "./navBar.module.scss";

export function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const containerSearch = useRef<HTMLDivElement>(null);
  const menuMobileRef = useRef<HTMLUListElement>(null);

  const menuItens = [
    "Quem Somos",
    "Metodologia",
    "Nossas soluções",
    "Conteúdos para você",
    "Canais de comunicação",
  ];

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (menuMobileRef.current && !menuMobileRef.current.contains(target)) {
      setMenuOpen(false);
      setInputSearch("");
    }
  };

  const handleClickOutSideContainerSearch = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (containerSearch.current && !containerSearch.current.contains(target)) {
      setSearchOpen(false);
      setInputSearch("");
    }
  };

  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    document.addEventListener("mousedown", handleClickOutSideContainerSearch);

    return () => {
      removeEventListener("mousedown", handleClickOutsideMenu);
      removeEventListener("mousedown", handleClickOutSideContainerSearch);
    };
  }, []);

  return (
    <nav className={style.navbar}>
      {/*Hamburguer*/}
      <div className={style.hamburger} onClick={handleToggleMenu}>
        <div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </div>

      <div
        className={`${style.nav_container_mobile} ${
          isMenuOpen ? style.active : ""
        }`}
      >
        <ul
          id="menu_mobile"
          ref={menuMobileRef}
          className={style.container_mobile_list}
        >
          <li className={style.search_box}>
            <input
              type="search"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </li>
          {menuItens.map((item) => (
            <li key={`${item}_${Math.random()}`}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.navbar_container_desktop}>
        <div className={style.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <ul className={style.container_desktop_list}>
          {menuItens.map((item) => (
            <li key={`${item}_${Math.random()}`}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className={style.container_desktop_buttons}>
          <button>
            <img src="/images/icons/e-mail.png" alt="icone email" />
            Fale com especialista
          </button>
          <button onClick={handleToggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={containerSearch}
        className={`${style.desktop_search} ${searchOpen ? style.active : ""}`}
      >
        <input
          type="search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
