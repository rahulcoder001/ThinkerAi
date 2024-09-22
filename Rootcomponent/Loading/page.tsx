import React, { useEffect, useState } from 'react';

const Loading = ({ onAnimationComplete }) => {
  const [circleVisible, setCircleVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [circlePosition, setCirclePosition] = useState(0);
  const [textVisible, setTextVisible] = useState(new Array(8).fill(false));

  useEffect(() => {
    // Circle reveal
    setCircleVisible(true);

    setTimeout(() => {
      // Image reveal inside the circle
      setImageVisible(true);

      // Start moving the circle slightly to the left and reveal text
      setTimeout(() => {
        const interval = setInterval(() => {
          setCirclePosition((prev) => {
            if (prev > -80) { // Move slightly left
              return prev - 5; // Shift circle left smoothly
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 50);

        // Reveal text letters one by one
        const revealLetterTimeouts = textVisible.map((_, index) => {
          return setTimeout(() => {
            setTextVisible((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }, index * 300); // Adjust timing for smoother effect
        });

        setTimeout(() => {
          onAnimationComplete(); // Notify when animation is complete
        }, 600 + textVisible.length * 300); // Adjust timing based on your text reveal

        return () => {
          revealLetterTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
      }, 500); // Delay before starting text reveal
    }, 500); // Delay before image reveal
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.circleContainer}>
        <div
          style={{
            ...styles.circle,
            transform: `translateX(${circlePosition}px)`,
            transition: 'transform 0.5s ease-in-out',
            opacity: circleVisible ? 1 : 0,
          }}
        >
          <img
            src="/images/logo.png"
            alt="Circular"
            style={{
              ...styles.image,
              opacity: imageVisible ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out', // Faster image reveal
            }}
          />
        </div>
        <div style={styles.textContainer}>
          {['E', 'D', 'U', 'B', 'O', 'T', 'I', 'X'].map((letter, index) => (
            <span
              key={index}
              style={{
                fontSize: '5rem',
                fontWeight: 'bolder',
                color: textVisible[index] ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)', // Lighter to darker effect
                opacity: textVisible[index] ? 1 : 0,
                transform: textVisible[index] ? 'translateX(0)' : 'translateX(50px)', // Reveal from right of circle
                transition: `opacity 0.5s ease-in-out, transform 0.5s ease-in-out, color 1s ease-in-out`,
                marginLeft: index === 0 ? '13.6rem' : '1rem', // Increase initial spacing and spacing between letters
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black'
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    left: '30%', // Start circle from left side
    transform: 'translateX(-30%)', // Adjust for initial centering
  },
  image: {
    width: '110%',
    height: '110%',
    objectFit: 'cover',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '190px', // Increased margin to make space between circle and text
    width: '100%', // Ensure there's enough width for all letters to be visible
    overflow: 'hidden' // Prevent overflow of letters
  },
};

export default Loading;
