import React from "react";
import { Link } from "wouter";
import Logo from "../assets/logo.svg";
import { getTags } from "../features/tagsSlice";
import ActiveLink from "./ActiveLink";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ActiveLink aria-current="page" href="/">
                Home
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink aria-current="page" href="/random">
                Random
              </ActiveLink>
            </li>
        

            <li className="nav-item">
              <ActiveLink aria-current="page" href="/bookmarks">
                Bookmarks
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
