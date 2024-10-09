/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ]
    }
};

export default nextConfig;
