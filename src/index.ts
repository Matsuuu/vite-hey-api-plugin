import { UserConfig, createClient } from "@hey-api/openapi-ts";

export function HeyApi(configs: UserConfig, verbose = false) {
  return {
    name: "Hey API generator",

    buildStart() {
      function runClient() {
        createClient(configs).catch((e) => {
          if (verbose) {
            console.error(e);
          }
          console.log(
            "\x1b[31m%s\x1b[0m",
            "OpenAPI Generation watch mode failed. API did not respond. Retrying in 5 seconds...",
          );
          setTimeout(() => runClient(), 5000);
        });
      }
      runClient();
    },
  };
}
