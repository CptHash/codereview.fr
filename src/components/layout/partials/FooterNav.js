import React, { useState} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const [legals, setlegals] = useState("Mention légals");

  const classes = classNames(
    'footer-nav',
    className
  );

  const editLegals = (e) => {
    setlegals(legals == "Mention légals" ? "Hébergeur: Google Cloud Platform, 8 rue de Londres 75009 Paris. Tèl: 01 42 68 53 00" : "Mention légals");
  }

  const login = (e) => {
    e.preventDefault();
    window.location = "https://form.typeform.com/to/KYk4lAS3";
  }

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0" onClick={login} >Contact</Link>
        </li>
        <li>
          <Link to="#0" onClick={editLegals}>{legals}</Link>
        </li>
        <li>
          <Link to="#0" onClick={login} >Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;