import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './c.css';
import Link from 'next/link';
import Image from 'next/image';

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4 },
  },
};

const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export default function Clip({ paths }: { paths: { name: string; path: string; link: string }[] }) {
  const [index, setIndex] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const squares = ['yellow', 'green', 'blue', 'violet'];

  const clickHandler = (color: string, colorIdx: number) => {
    setSelectedSquare(color);
    setIndex(colorIdx);
  };

  return (
    <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
      <AnimatePresence mode="wait" initial={false}>
        {selectedSquare ? (
          <motion.div
            className={`card card__wrapper card__wrapper--${selectedSquare}`}
            key="card"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            <div className="card__header">
              <h2>{paths[index].name}</h2>
              <button type="button" onClick={() => setSelectedSquare(null)} style={{ fontSize: '40px' }}>
                X
              </button>
            </div>
            <div className="card__content">
              <Link href={paths[index].link} target="_blank">
                <Image src={paths[index].path} width={250} height={250} alt="image" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="cp-transition__squares-wrapper"
            key="squares"
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            {squares.map((color, colorIdx) => (
              <motion.div
                key={color}
                className={`square square--${color}`}
                onClick={() => clickHandler(color, colorIdx)}
                variants={squareVariants}
                transition={{ duration: 0.2, type: 'spring' }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
