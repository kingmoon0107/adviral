import Image from 'next/image';
import styles from './CTA.module.css';

const KAKAO_URL = 'https://open.kakao.com/o/s9vAsJBi';
const INSTAGRAM_URL = 'https://www.instagram.com/ad.viral';

const PRICE_TABLE = [
  { size: '1×1', cells: 1, price: '1,000원' },
  { size: '2×2', cells: 4, price: '4,000원' },
  { size: '3×3', cells: 9, price: '9,000원' },
  { size: '4×4', cells: 16, price: '16,000원' },
  { size: '5×5', cells: 25, price: '25,000원' },
];

export default function CTA() {
  return (
    <section className={styles.ctaSection} id="cta">
      <div className={styles.ctaLayout}>
        {/* Left Side: Buttons & Pricing */}
        <div className={styles.ctaLeft}>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span className={styles.ctaIcon}>💬</span>
            <span className={styles.ctaTextContainer}>
              실시간 입점 문의<br />
              <span className={styles.ctaSubText}>한 칸 당 1,000원!</span>
            </span>
          </a>
          <p className={styles.ctaHint}>
            <span className={styles.ctaHintStar}>*</span> 빈 칸 클릭 시 상담 채널로 연결됩니다.
          </p>

          <div className={styles.priceSection}>
            <h3 className={styles.priceTitle}>📐 사이즈별 가격</h3>
            <div className={styles.priceGrid}>
              {PRICE_TABLE.map((item) => (
                <div key={item.size} className={styles.priceCard}>
                  <span className={styles.priceSize}>{item.size}</span>
                  <span className={styles.priceCells}>{item.cells}칸</span>
                  <span className={styles.priceAmount}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: QR Code */}
        <div className={styles.ctaRight}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.qrLink}
          >
            <Image
              src="/qr-link.png"
              alt="ad.viral 인스타그램 QR 코드"
              width={160}
              height={160}
              className={styles.qrImage}
            />
            <span className={styles.qrCaption}>인스타그램에서 팔로우하기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
