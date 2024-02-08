import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { Searchbar } from '../Searchbar/Searchbar';
import { AccountPill } from '../AccountPill/AccountPill';
import Image from 'next/image';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isAtTop, setIsAtTop] = React.useState<boolean>(true);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const handleSearchClick = (): void => {
    setIsClicked(!isClicked);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 1;
      if (isTop !== isAtTop) {
        setIsAtTop(isTop);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isAtTop]);

  return isClicked ? (
    <nav className={`${styles.navbar} ${!isAtTop ? styles.scrolled : ''}`}>
      <button className={styles.navbar__arrow} onClick={handleSearchClick}>
        <Image src={`/left.svg`} alt='arrow left' height='20' width='20' />
      </button>
      <Searchbar onSearch={onSearch} />
    </nav>
  ) : (
    <nav className={`${styles.navbar} ${!isAtTop ? styles.scrolled : ''}`}>
      <div className={styles.navbar__logo}>
        <Link href='/'>
          <Image src={`/tmdb-logo.svg`} alt='logo' height='33' width='50' />
        </Link>
      </div>
      <div className={styles.navbar__center}>
        <Searchbar onSearch={onSearch} />
      </div>
      <div className={styles.navbar__right}>
        <button
          className={styles.navbar__right__searchbutton}
          onClick={handleSearchClick}
        >
          <Image src={`/search.svg`} alt='Search Icon' width='20' height='20' />
        </button>

        <AccountPill />
      </div>
    </nav>
  );
};