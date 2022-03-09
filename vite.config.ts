import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // I have to keep adding more and more dependencies to this...
    // Shouldn't vite automatically pre-bundle prop-types since it's a part of gboost-ui
    // And auto pre-bundle zen-observable since it's a part of aws-amplify?
    include: ["aws-amplify", "@aws-amplify/ui-react", "prop-types", "zen-observable", "url"]
  }
})
