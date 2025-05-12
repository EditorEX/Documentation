import nextra from "nextra";

console.log("NODE_ENV:", process.env.NODE_ENV);
const withNextra = nextra({
    search: process.env.NODE_ENV === 'production',
    defaultShowCopyCode: true,
    staticImage: true
});

export default withNextra({
    // ... Other Next.js config options
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    basePath: process.env.NODE_ENV === 'production' ? '/Documentation' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Documentation' : undefined,
    images: {
        unoptimized: true,
    }
});
