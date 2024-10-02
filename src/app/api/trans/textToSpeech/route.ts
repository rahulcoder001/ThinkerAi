import { NextResponse } from 'next/server';
import { ElevenLabsClient, ElevenLabs } from 'elevenlabs';
import fs from 'fs';
import path from 'path';

const client = new ElevenLabsClient({ apiKey: 'sk_6647a2d19072f6407cfda51dfea99e98a4ade62d446c1415' });

export async function POST(req: Request): Promise<Response> {  // Explicitly set the return type as Promise<Response>
    const { text } = await req.json();

    if (!text) {
        return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    try {
        const outputFilePath = path.join(process.cwd(), 'public', 'output.mp3');

        const responseStream = await client.textToSpeech.convert('pMsXgVXv3BLzUgSXRplE', {
            optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
            output_format: ElevenLabs.OutputFormat.Mp32205032,
            text: text,
            voice_settings: {
                stability: 0.1,
                similarity_boost: 0.3,
                style: 0.2,
            },
        });

        const fileStream = fs.createWriteStream(outputFilePath);
        responseStream.pipe(fileStream);

        return new Promise<Response>((resolve, reject) => {
            fileStream.on('finish', () => {
                resolve(NextResponse.json({ message: `Speech saved to ${outputFilePath}` }));
            });

            fileStream.on('error', (error) => {
                console.error("Error writing file:", error);
                reject(NextResponse.json({ error: 'Error saving speech' }, { status: 500 }));
            });
        });

    } catch (error) {
        console.error("Error generating speech:", error);
        return NextResponse.json({ error: 'Error generating speech' }, { status: 500 });
    }
}
