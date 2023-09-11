/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SERVER_URL: 'http://localhost:4200',
    APP_URL: 'http://localhost:3000'
  },
  images: {
		domains: ['static1.srcdn.com/wordpress/','static.eldorado.ru','static1.srcdn.com','apple-svc.ru','foto-iphona.ru','cdn1.ozone.ru','localhost']
	}
}

module.exports = nextConfig
