import Image from 'next/image';
import styles from './Header.module.css';
import adsData from '@/data/ads.json';

export default function Header() {
  const totalCells = 400;
  const soldCells = adsData.ads.reduce((acc, ad) => acc + (ad.width * ad.height), 0);
  const availableCells = totalCells - soldCells;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="https://www.instagram.com/ad.viral" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
          <Image
            src="/logo.png"
            alt="애드바이럴 로고"
            width={44}
            height={44}
            className={styles.logo}
            priority
          />
          <div className={styles.titleGroup}>
            <h1 className={styles.title}>ad.viral</h1>
            <span className={styles.subtitle}>애드바이럴 광고판</span>
          </div>
        </a>
        <div className={styles.stats}>
          <span className={styles.statItem}>
            <span className={styles.statDot}></span>
            빈 칸 {availableCells}개
          </span>
          <span className={styles.statItem}>
            <span className={styles.statDotSold}></span>
            입점 완료 {soldCells}칸
          </span>
          <span className={styles.priceTag}>
            칸당 1,000원
          </span>
        </div>
      </div>
    </header>
  );
}
