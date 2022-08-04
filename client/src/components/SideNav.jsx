import Menu from './Menu';
import { useSelector } from 'react-redux';
import styles from '../styles/SideNav.module.css';

const SideNav = () => {
    const {showMenu} = useSelector(state => state.nav);
    return (
        <nav className={ `${styles.nav} ${showMenu? styles.openMenu: styles.closeMenu}`} ><Menu /></nav>
    )
}
export default SideNav;