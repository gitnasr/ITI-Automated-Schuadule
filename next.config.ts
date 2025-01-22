import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
}
});