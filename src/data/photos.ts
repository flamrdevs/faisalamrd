import { nanoid } from "nanoid";

import { createArray } from "javascript-yesterday";

type Photo = {
  id: string;
  src: string;
};

const create15Photos = (): Photo[] => createArray(30, (i) => ({ id: nanoid(), src: `/images/${i}.webp` }));

const DUPLICATE = 1;

const photos: Photo[] = createArray(DUPLICATE, () => create15Photos())
  .reduce((a, b) => a.concat(b), [] as Photo[])
  .sort(() => Math.random() - 0.5);

export default photos;
