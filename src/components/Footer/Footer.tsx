import styles from './Footer.module.css';

const KAKAO_URL = 'https://open.kakao.com/o/s9vAsJBi';
const INSTAGRAM_URL = 'https://www.instagram.com/ad.viral';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerBrandLink}
        >
          <span className={styles.footerBrand}>ad.viral</span>
        </a>
        <div className={styles.footerLinks}>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            입점 문의
          </a>
          <span className={styles.footerDivider}></span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            인스타그램
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} ad.viral (애드바이럴). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
