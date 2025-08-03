// app/api/pdfs/route.ts
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pdfDir = path.join(process.cwd(), 'public/pdf');
    const files = await fs.readdir(pdfDir);
    const pdfFiles = files.filter((file) => file.endsWith('.pdf'));
    return new Response(JSON.stringify(pdfFiles), { status: 200 });
  } catch (error) {
    console.error('Error reading PDF directory:', error);
    return new Response(JSON.stringify({ error: 'Failed to load PDFs' }), { status: 500 });
  }
}