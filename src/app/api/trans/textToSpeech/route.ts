// src/app/api/trans/textToSpeech/route.ts
import { NextResponse } from 'next/server';
import { ElevenLabsClient, ElevenLabs } from 'elevenlabs';
import fs from 'fs';
import path from 'path';

const client = new ElevenLabsClient({ apiKey: 'sk_6ffdd34a6705576bb5b90f6838742c510ce387f08364c49a' });

export async function POST(req: Request) {
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

        return new Promise((resolve) => {
            fileStream.on('finish', () => {
                resolve(NextResponse.json({ message: `Speech saved to ${outputFilePath}` }));
            });

            fileStream.on('error', (error) => {
                console.error("Error writing file:", error);
                resolve(NextResponse.json({ error: 'Error saving speech' }, { status: 500 }));
            });
        });

    } catch (error) {
        console.error("Error generating speech:", error);
        return NextResponse.json({ error: 'Error generating speech' }, { status: 500 });
    }
}
