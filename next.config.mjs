/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'dfrcvgfdfrgemntsfwvw.supabase.co',
              pathname: '**',
            },
          ],
      
        
    }
};

export default nextConfig;
