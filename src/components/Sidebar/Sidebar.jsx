import React from 'react';
import sidebar_items from '../../assets/data/sidebar.json';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const SidebarItem = (props) => {
  const active = props.active ? 'active' : '';
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const activeItem = () => {
    let value = sidebar_items.findIndex(
      (item) => item.route === location.pathname,
    );
    console.log('value is', value);

    if (value == -1) {
      console.log('location pathname', location.pathname);
      value = sidebar_items.findIndex((item) =>
        location.pathname.includes(item?.route),
      );
    }
    return value;
  };
  return (
    <div className="sidebar">
      {sidebar_items.map((obj, key) => (
        <Link to={obj.route} key={key}>
          <SidebarItem
            title={obj.display_name}
            // icon={obj.icon}
            active={key === activeItem()}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
