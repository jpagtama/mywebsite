import Menu from './Menu';
import { useSelector } from 'react-redux';
import ProfilePic from './ProfilePic';
import styles from '../../styles/SideNav.module.css';

const SideNav = () => {
    const {showMenu} = useSelector(state => state.nav);
    return (
        <nav className={ `${styles.nav} ${showMenu? styles.openMenu: styles.closeMenu}`} >
            <ProfilePic />
            <Menu />
        </nav>
    )
}
export default SideNav;