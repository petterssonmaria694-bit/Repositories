// 构建后把单文件产物复制到项目根目录，命名为「个人主页.html」，
// 方便直接双击打开（根目录 index.html 仍是 npm run dev 的开发入口，勿删）
import { copyFileSync } from "node:fs";

const target = "个人主页.html";
copyFileSync("dist/index.html", target);
console.log(`已生成单文件成品：${target}（双击即可打开）`);
