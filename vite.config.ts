import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // I have to keep adding more and more dependencies to this...
    // Shouldn't vite automatically pre-bundle prop-types since it's a part of gboost-ui?
    // And auto pre-bundle zen-observable since it's a part of aws-amplify?
    include: [
      "prop-types",
      "aws-amplify",
      "@aws-amplify/ui-react",
      "aws-amplify > zen-observable-ts > zen-observable",
      "aws-amplify > @aws-amplify/core > @aws-sdk/client-cloudwatch-logs > @aws-sdk/url-parser-native > url",
      "aws-amplify > @aws-amplify/core > @aws-sdk/client-cognito-identity > @aws-sdk/url-parser-native > url",
      "aws-amplify > @aws-amplify/core > @aws-sdk/credential-provider-cognito-identity > @aws-sdk/client-cognito-identity > @aws-sdk/url-parser-native > url",
      "aws-amplify > @aws-sdk/url-parser-native > url",
    ],
  }
})
