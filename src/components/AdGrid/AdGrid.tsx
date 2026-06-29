'use client';

import { useState, useMemo } from 'react';
import styles from './AdGrid.module.css';
import adsData from '@/data/ads.json';

const KAKAO_URL = 'https://open.kakao.com/o/s9vAsJBi';
const GRID_COLS = 20;
const TOTAL_CELLS = 400;

interface Ad {
  id: number;
  brand: string;
  startCell: number;
  width: number;
  height: number;
  image: string;
  url: string;
  description: string;
}

function cellToRowCol(cellNum: number): { row: number; col: number } {
  const row = Math.ceil(cellNum / GRID_COLS);
  const col = ((cellNum - 1) % GRID_COLS) + 1;
  return { row, col };
}

function buildOccupiedSet(ads: Ad[]): Set<number> {
  const set = new Set<number>();
  for (const ad of ads) {
    const { row: startRow, col: startCol } = cellToRowCol(ad.startCell);
    for (let r = 0; r < ad.height; r++) {
      for (let c = 0; c < ad.width; c++) {
        const cellNum = (startRow - 1 + r) * GRID_COLS + (startCol + c);
        set.add(cellNum);
      }
    }
  }
  return set;
}

export default function AdGrid() {
  const ads: Ad[] = adsData.ads;
  const occupiedSet = useMemo(() => buildOccupiedSet(ads), [ads]);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const handleEmptyClick = () => {
    window.open(KAKAO_URL, '_blank', 'noopener,noreferrer');
  };

  const handleAdClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleImgError = (adId: number) => {
    setImgErrors(prev => new Set(prev).add(adId));
  };

  // Render ad elements (positioned via grid-column/grid-row)
  const adElements = useMemo(() => {
    return ads.map(ad => {
      const { row, col } = cellToRowCol(ad.startCell);
      return (
        <div
          key={`ad-${ad.id}`}
          className={styles.adCell}
          style={{
            gridColumn: `${col} / span ${ad.width}`,
            gridRow: `${row} / span ${ad.height}`,
          }}
          onClick={() => handleAdClick(ad.url)}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleAdClick(ad.url)}
        >
          {imgErrors.has(ad.id) ? (
            <div className={styles.adFallback}>{ad.brand}</div>
          ) : (
            <img
              src={ad.image}
              alt={ad.brand}
              className={styles.adImage}
              loading="lazy"
              onError={() => handleImgError(ad.id)}
            />
          )}
          <span className={styles.tooltip}>{ad.brand}</span>
        </div>
      );
    });
  }, [ads, imgErrors]);

  // Render empty cells
  const emptyCells = useMemo(() => {
    const cells: React.ReactNode[] = [];
    for (let cellNum = 1; cellNum <= TOTAL_CELLS; cellNum++) {
      if (occupiedSet.has(cellNum)) continue;
      const { row, col } = cellToRowCol(cellNum);
      cells.push(
        <div
          key={`cell-${cellNum}`}
          className={styles.cell}
          style={{
            gridColumn: col,
            gridRow: row,
          }}
          onClick={handleEmptyClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleEmptyClick()}
          aria-label={`셀 ${cellNum} - 광고 문의`}
          onMouseEnter={() => setHoveredCell(cellNum)}
          onMouseLeave={() => setHoveredCell(null)}
        >
          <span className={styles.cellNumber}>{cellNum}</span>
        </div>
      );
    }
    return cells;
  }, [occupiedSet, hoveredCell]);

  return (
    <section className={styles.gridSection} id="ad-grid">
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {emptyCells}
          {adElements}
        </div>
      </div>
    </section>
  );
}
