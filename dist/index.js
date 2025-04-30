"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const openaiService_1 = require("./openaiService");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('📥 Enter your Gherkin scenario:\n', async (gherkinInput) => {
    const code = await (0, openaiService_1.generateCodeFromGherkin)(gherkinInput);
    fs_1.default.writeFileSync('./output/generatedTest.ts', code);
    console.log('\n✅ Code saved to output/generatedTest.ts');
    rl.close();
});
