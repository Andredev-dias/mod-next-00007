/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },
    rewrites: () => {
        return [
            {
              source: "/",
              destination: "/home"  
            },
            {
              source: "/pagina-com-axios",
              destination: "/axios-page"  
            },
            {
              source: "/pagina-sem-hook",
              destination: "/no-hook-page"  
            },
        ]
    }
};

export default nextConfig;
