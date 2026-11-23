# Byte Units · 容量换算

Convert an integer or decimal quantity to bytes and common decimal and binary units, without floating-point rounding.

Open **Byte Units**, enter a value (for example `1.5`), then choose **Convert size**. Requires Node.js 22 or later. No network, files, saved input or host permissions. Copying is always explicit.

在字节、十进制和二进制单位间精确换算，支持小数输入。打开插件页面，输入内容后点击「换算容量」。需要 Node.js 22 或更高版本；不读取文件、不联网，也不保存输入。

## Independent development

`npm ci --ignore-scripts` → `npm run build` → `npm run verify` → `npm run package`. Push a matching `vX.Y.Z` tag to publish this plugin independently. The Hub distributes the release URL and SHA-256; it does not build this package.
