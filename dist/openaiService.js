"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCodeFromGherkin = generateCodeFromGherkin;
const dotenv_1 = __importDefault(require("dotenv"));
const openai_1 = __importDefault(require("openai"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
async function generateCodeFromGherkin(gherkin) {
    const path = require('path');
    const templatePath = path.resolve(__dirname, '../src/templates/promptTemplate.txt');
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const prompt = template.replace('{{gherkin_input}}', gherkin);
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message?.content || '';
}
