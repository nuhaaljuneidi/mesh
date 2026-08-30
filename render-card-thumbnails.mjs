import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'file:///C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = process.cwd();
const html = await fs.readFile(path.join(root, 'mistakes', 'index.html'), 'utf8');
const svgs = [...html.matchAll(/<svg viewBox="0 0 520 320" aria-hidden="true">([\s\S]*?)<\/svg>/g)]
  .map((match) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320">${match[1]}</svg>`
    .replaceAll(/#223643|#203441|#20333f|#223540|#21333f/g, '#f1eee5')
    .replaceAll(/#7197b5|#7298b5|#82a5bf|#7b9db8|#6f94b0|#87a5b9|#7fa2bd/g, '#557991')
    .replaceAll('#cfba54', '#b38b37')
    .replaceAll(/#ead56b|#f0dc78/g, '#9b7428'));

if (svgs.length !== 7) throw new Error(`Expected 7 card visuals; found ${svgs.length}.`);

const outDir = path.join(root, 'mistakes', 'assets');
await fs.mkdir(outDir, { recursive: true });

for (const [index, svg] of svgs.entries()) {
  await sharp(Buffer.from(svg))
    .resize(1040, 640)
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, `lesson-${index + 1}-card.png`));
}
