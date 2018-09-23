import React from 'react';

import LinkButton from '../link-button/link-button.jsx';
import {MENU_ITEMS} from '../../constants/header.constant';

import './header.less';

export default class Header extends React.Component {
    render() {

        const menuItems = this._getMenuItems();

        return (
            <header className={'header'}>
                <ul className={'header__menu'}>
                    {menuItems}
                </ul>
            </header>
        );
    }

    _getMenuItems() {
        return MENU_ITEMS.map((item, index) => {
            const styleItem = `header__menu-item ${
                    item.center ? item.center : ''
                }`;

            return <li className={styleItem} key={index}>
                {
                    !item.center ?
                    <LinkButton
                        to={item.pathTo}
                        text={item.text}
                        size={item.size}
                        type={item.type}
                    /> : ''
                }
            </li>;
        });
    }
}
