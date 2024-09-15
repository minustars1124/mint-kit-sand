import { filename } from 'pathe/utils';
const images = import.meta.glob('~/assets/images/**/*', { eager: true });

const ret: Record<string, string> = Object.fromEntries(
  Object.entries(images).map(([key, value]) => [filename(key), value.default])
);

export default ret as Readonly<typeof ret>