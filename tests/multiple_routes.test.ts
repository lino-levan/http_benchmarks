import { assert, assertEquals, join } from "./deps.ts";

import { MULTIPLE_ROUTES, PROTOCOL_HTTP_URL_PORT, RESPONSE_MESSAGE } from "../benchmarks/SERVER_DATA.ts";
import { getBenchmarkList } from "../src/get_benchmarks.ts";

const benchmarks = (await getBenchmarkList())["multiple_routes"];

/*   ["GET", MULTIPLE_ROUTES.RANDOM_NUMBER, 1],
  ["GET", MULTIPLE_ROUTES.HELLO_WORLD, 1],
  ["POST", MULTIPLE_ROUTES.PLUS_1, 1],
  ["GET", MULTIPLE_ROUTES.COUNT, 1],
  ["POST", MULTIPLE_ROUTES.MINUS_1, 1],
  ["GET", MULTIPLE_ROUTES.COUNT, 1], */

const routes: Record<MULTIPLE_ROUTES, string> = {
  "/count": join(PROTOCOL_HTTP_URL_PORT, "/count"),
  "/plus_1": join(PROTOCOL_HTTP_URL_PORT, "/plus_1"),
  "/minus_1": join(PROTOCOL_HTTP_URL_PORT, "/minus_1"),
  "/hello_world": join(PROTOCOL_HTTP_URL_PORT, "/hello_world"),
  "/random_number": join(PROTOCOL_HTTP_URL_PORT, "/random_number"),
};

async function get(url: string): Promise<string> {
  return await (await fetch(url)).text();
}

async function post(url: string): Promise<string> {
  return await (await fetch(url, {
    method: "POST",
  })).text();
}

Deno.test("multiple_routes", async (t) => {
  for (const benchmark of benchmarks) {
    await t.step(benchmark.name, async (t) => {
      const deno = new Deno.Command("deno", {
        args: ["run", "--unstable", "--allow-read", "--allow-net", "--allow-env", benchmark.path],
        stdin: "null",
        stderr: "piped",
        stdout: "null",
      });
      const denoSubprocess = deno.spawn();

      // wait for a second so deno can fully start
      await new Promise((r) => setTimeout(r, 1000));

      await t.step("/plus_1 + /count", async () => {
        for (let j = 0; j < 15; ++j) {
          assertEquals(await get(routes["/count"]), `${j}`);
          assertEquals(await post(routes["/plus_1"]), "ok");
        }
      });

      await t.step("/minus_1 + /count", async () => {
        for (let j = 15; j > 0; --j) {
          assertEquals(await get(routes["/count"]), `${j}`);
          assertEquals(await post(routes["/minus_1"]), "ok");
        }
      });

      await t.step("/random_number", async () => {
        for (let i = 0; i < 10; ++i) {
          const number = +(await get(routes["/random_number"]));
          assert(number > 0 && number < 1);
        }
      });

      await t.step("/hello_world", async () => {
        for (let i = 0; i < 10; ++i) {
          assertEquals(await get(routes["/hello_world"]), RESPONSE_MESSAGE);
        }
      });

      denoSubprocess.kill();
      await denoSubprocess.output();
    });
  }
});
