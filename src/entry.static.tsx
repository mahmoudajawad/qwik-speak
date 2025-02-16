import { qwikCityGenerate } from '@builder.io/qwik-city/static/node';
import render from './entry.ssr';
import { fileURLToPath } from 'url';
import { join } from 'path';

// Execute Qwik City Static Site Generator
qwikCityGenerate(render, {
  origin: 'http://localhost:8080/',
  outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
});
