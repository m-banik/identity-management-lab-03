const generatePassword = () => {
  /* Tworzę stałe ze znakami z poszczególnych kategorii - przydadzą
     się później. */
  const greatChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const smallChars = 'abcdefghijklmnopqrstuvwxyz';
  const cyphers = '0123456789';
  /* Pierwotnie chciałem użyć mniejszego zakresu znaków specjalnych,
     ale doszedłem do wniosku, że większy zmniejsza prawdopodobieństwo
     wystąpienia słów w haśle. To było łatwiejsze w wykonaniu, niż
     angażowanie zewnętrznych bibliotek. */
  const specialSigns = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';

  // Stała pomocnicza agregująca znaki.
  const chars = greatChars + smallChars + cyphers + specialSigns;

  // Hasło.
  let password = '';

  /* Pętla główna, która pozostaje nieprzerwana, dopóki wygenerowane 
     hasło nie spełni warunków. */
  while (true) {
    // Pętla zagnieżdżona generująca tekst o długości od 8 do 32 znaków.
    for (let i = 8 + Math.floor(Math.random() * 25); i > 0; i--) {
      // Zakres to nasz zagregowany ciąg znaków.
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Gromadzę kategorie i wykonuję sprawdzenie poprawności dla każdej z nich.
    const passedTests = [greatChars, smallChars, cyphers, specialSigns].reduce(
      (passedTestsNumber, subChars) => {
        const flag = !!password
          .split('')
          .find((passChar) => subChars.includes(passChar));

        if (flag) passedTestsNumber += 1;

        return passedTestsNumber;
      },
      0
    );

    /* Sprawdzenie warunków, w tym poprawnej długości hasła. Jeśli 
       zostaną spełnione - pętla główna zostaje przerwana. */
    if (passedTests === 4 && password.length > 7) break;
    password = '';
  }

  // Wygenerowane hasło zostaje zwrócone przez funkcję.
  return password;
};

module.exports = generatePassword;
