import dotnev from 'dotenv';
import OpenAI from 'openai';
import fs from 'fs';

dotnev.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


export async function generateCodeFromGherkin(gherkin: string): Promise<string> {
    const path = require('path');
    const templatePath = path.resolve(__dirname, '../src/templates/promptTemplate.txt');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const prompt = template.replace('{{gherkin_input}}', gherkin);

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
    });

    return response.choices[0].message?.content || '';
}