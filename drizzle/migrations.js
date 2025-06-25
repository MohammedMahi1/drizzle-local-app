// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_odd_ben_parker.sql';
import m0001 from './0001_reflective_mercury.sql';
import m0002 from './0002_good_juggernaut.sql';
import m0003 from './0003_ambitious_justin_hammer.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002,
m0003
    }
  }
  