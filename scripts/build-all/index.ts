import Listr from 'listr';

import buildData from '../build-data';
import buildPages from '../build-pages';

const tasks = new Listr({ collapse: false } as any);

tasks.add({
  title: 'Data',
  task: () => buildData
});

tasks.add({
  title: 'Pages',
  task: () => buildPages
});

tasks.run().catch(err => {
  console.error(err);
  process.exit(1);
});
