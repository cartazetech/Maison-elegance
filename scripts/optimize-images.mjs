import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const directory = path.resolve('public/images')
const files = (await readdir(directory)).filter((file) => /\.png$/i.test(file))

for (const file of files) {
  const input = path.join(directory, file)
  const output = path.join(directory, file.replace(/\.png$/i, '.webp'))
  await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output)
  console.log(`${file} → ${path.basename(output)}`)
}
