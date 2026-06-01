import chatRealtime from './chat-realtime';
import reportQueue from './report-queue';
import bedrockIa from './bedrock-ia';
import browserExt from './browser-ext';
import legacyAngular from './legacy-angular';

const samples = [
    chatRealtime,
    reportQueue,
    bedrockIa,
    browserExt,
    legacyAngular,
];

export const samplesById = samples.reduce((acc, sample) => {
    acc[sample.id] = sample;
    return acc;
}, {});

export default samples;
