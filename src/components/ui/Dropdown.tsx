import React, { useState, useRef } from "react";
import styles from '../../styles/components/ui/Dropdown.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import { closeMenuExternalClick } from "../../utils/helpers"

const Dropdown = ({ title, options, type, width= 'max-content'}) => {
  //types:
  // form: change title on current option
  // menu: title is immutable

  const [open, setOpen] = useState(false);
  const [currentSelect, setSelect] = useState(title)
  const node = useRef();
  closeMenuExternalClick(node, ()=>setOpen(false))

  const handleChange = selectedValue => {
    if (type == 'form') {
      setSelect(selectedValue);
      setOpen(false);
    }
  };

  return (
    <div ref={node} className={styles.dropdown} style={{width:width}}>
      <button className={styles.dropdownToggler + ' ' +`${open ? styles.active : ''}`} onClick={() => setOpen(!open)}>
        <p>{currentSelect}</p>
        <span><BiChevronDown /></span>
      </button>
      {open && (
        <ul className={styles.dropdownMenu}>
          {options.filter(opt=> opt!= currentSelect).map(opt => (
            <li className={styles.item} onClick={() => handleChange(opt)}>
              <p>{opt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
