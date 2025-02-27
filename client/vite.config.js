
// import { defineConfig } from 'vite'


// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),   tailwindcss()],
//   theme: {
//     extend: {
//       fontSize : {
//         "coures-details-heading-small" : ["26px", "36px"],
//         "coures-details-heading-large" : ["36px", "44px"],
//         "homw-heading-small" : ["28px", "34px"],
//         "homw-heading-large" : ["48px", "56px"],
//         "default" : ["15px", "21px"]
//       }
//     }
//   }
 
// })
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(), tailwindcss(),
  ],
})