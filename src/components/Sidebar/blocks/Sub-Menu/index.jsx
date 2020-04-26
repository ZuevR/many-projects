import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { MenuContext } from '../../../../context/Menu-Context';
import SubMenuItem from '../Sub-Menu-Item';

import styles from './styles.module.scss';

const SubMenu = ({ hidden, closed }) => {
  const { subItems } = useContext(MenuContext);

  return (
    <div
      className={`${styles['sub-menu']} ${hidden ? styles['menu-hidden'] : ''} ${closed ? styles['menu-closed'] : ''}`}
    >
      <div className={styles.scroll}>
        <PerfectScrollbar
          options={{
            suppressScrollX: true,
            wheelPropagation: false,
          }}
          className={styles['scroll-container']}
        >
          <Nav className="d-block">
            {subItems.map((item) => <SubMenuItem key={item.id} item={item} />)}
          </Nav>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

SubMenu.propTypes = {
  hidden: PropTypes.bool,
  closed: PropTypes.bool,
};

SubMenu.defaultProps = {
  hidden: false,
  closed: false,
};

export default SubMenu;
