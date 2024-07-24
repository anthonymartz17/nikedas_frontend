import categories from "./navigation";
import "./NavDesktop.css";
import { useRef, useState } from "react";

export default function NavDesktop() {
  const dropdownRef = useRef(null);
  const [details, setDetails] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function showDropdown(idx) {
    setDetails(categories[idx].details);
    setIsDropdownVisible(true);
  }

  function hideDropdown() {
    setIsDropdownVisible(false);
  }

  return (
    <div className="navigation_desktop">
      <ul className="navigation_desktop_links">
        {categories.map(({ category }, idx) => (
          <li
            className="navigation_desktop_links_item"
            onMouseEnter={() => showDropdown(idx)}
            onMouseLeave={hideDropdown}
            key={idx}
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
      <div
        ref={dropdownRef}
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={hideDropdown}
        className={`navigation_desktop_dropdown ${isDropdownVisible ? 'visible' : ''}`}
      >
        <ul className="navigation_desktop_dropdown_list">
          {details.map((detail, idx) => (
            <div key={idx}>
              <h3 className="navigation_desktop_dropdown_title">
                {detail.title}
              </h3>
              <ul className="navigation_desktop_dropdown_details">
                {detail.items.map((item, idx) => (
                  <li
                    className="navigation_desktop_dropdown_details_item"
                    key={idx}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
