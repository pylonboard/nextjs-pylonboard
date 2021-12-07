const calendarTranspile = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid'
]);

const withImages = require('next-images');

module.exports = withImages(
  calendarTranspile({
    i18n: {
      defaultLocale: 'en',
      locales: ['en']
    }
  })
);
