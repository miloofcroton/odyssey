import { ReactTyped } from 'react-typed';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Namaste',
  'Salaam',
  'Guten tag',
  'Bună ziua',
];

const Greeting = () => {
  return (
    <ReactTyped
      loop
      typeSpeed={150}
      backSpeed={75}
      strings={greetings}
      smartBackspace
      shuffle={false}
      backDelay={2000}
      fadeOut={false}
      fadeOutDelay={100}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  );
};

export default Greeting;
