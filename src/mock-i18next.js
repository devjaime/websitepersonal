
jest.mock('i18next', () => ({
    use: () => {
      return {
        init: () => {},
      };
    },
    changeLanguage: () => new Promise(() => {}),
  }));
  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
          language: 'es',
        },
      };
    },
  })); // https://react.i18next.com/misc/testing
  jest.mock('i18next', () => ({
    use: () => {
      return {
        init: () => {},
      };
    },
  }));
  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
          language: 'en',
        },
      };
    },
  })); // https://react.i18next.com/misc/testing
