import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['**/tests/*.ts'],
          exclude: ['**/node_modules/**'],
          name: 'Repo test-utils',
          isolate: false,
          fileParallelism: false,
          pool: 'threads',
        },
      },
    ],
  },
});