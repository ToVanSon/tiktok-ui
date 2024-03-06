import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"></img>
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    ></input>
                    <buton className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </buton>

                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
