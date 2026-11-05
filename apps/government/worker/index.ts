// Worker entry: the HeartStone gateway (sign-in, session cookie, /api proxy) in front of this
// app's static assets. wrangler.jsonc routes only /api/* and /auth/* here (run_worker_first);
// every other path is served from ./dist without running this code.
import { handleGatewayRequest, type GatewayContext, type GatewayEnv } from "@heartstone/gateway";

interface Env extends GatewayEnv {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  fetch(request: Request, env: Env, ctx: GatewayContext): Promise<Response> {
    return handleGatewayRequest(request, env, ctx, {
      assetFetcher: (r) => env.ASSETS.fetch(r),
    });
  },
};
