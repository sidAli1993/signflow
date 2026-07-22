import { NextResponse } from 'next/server';
import { encryptPDF } from 'cryptpdf';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const password = formData.get('password') as string | null;

    if (!file || !password) {
      return NextResponse.json({ error: 'Missing file or password' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Encrypt the PDF in-memory using AES-256 (via cryptpdf)
    const encryptedBuffer = await encryptPDF(buffer, password);

    // Return the encrypted PDF as a blob stream
    const blob = new Blob([new Uint8Array(encryptedBuffer)], { type: 'application/pdf' });
    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="protected-${file.name}"`,
      },
    });
  } catch (error) {
    console.error('Encryption API Error:', error);
    return NextResponse.json({ error: 'Failed to encrypt PDF' }, { status: 500 });
  }
}
