import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const url = 'https://raw.githubusercontent.com/remorses/unframer/main/unframer/src/styles/framer.css';

async function main() {
  console.log('Fetching framer.css from unframer repo...');
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }
  const css = await response.text();
  const outPath = 'src/framer/unframer-styles/framer.css';
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, css, 'utf8');
  console.log(`Written ${css.length} bytes to ${outPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
