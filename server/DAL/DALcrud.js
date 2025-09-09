import { readFile, writeFile } from 'node:fs/promises';

const path = './DB/dbPosts.json';

export async function Read() {
    try {
        const content = await readFile(path, 'utf8');
        console.log('The information arrived successfully');
        return content;
    } catch (e) {
        console.log(e.message);
        return;
    }
}

export async function Create(newdata) {
    try {
        const content = await Read();
        const data = JSON.parse(content);
        data.push(newdata)
        await writeFile(path, JSON.stringify(data), 'utf8');
        return data;
    } catch (err) {
        return err.message
    }
}