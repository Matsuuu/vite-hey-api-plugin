# vite-hey-api-plugin

An easy drop-in setup for your Hey API client generators.

```typescript
import { HeyApi } from "vite-hey-api-plugin";
import { defineConfig } from "vite";

const config = defineConfig({
    plugins: [
        HeyApi(
            {
                input: "http://localhost:8080/q/openapi?format=json",
                output: {
                    path: "src/api",
                    indexFile: false,
                },
                watch: true,
                plugins: ["@hey-api/client-fetch"],
            }
        ),
    ],
});

export default config;
```
