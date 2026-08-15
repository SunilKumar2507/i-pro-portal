'use strict';

const Module = require('module');

const devServerConfigPath = require.resolve(
  'react-scripts/config/webpackDevServer.config'
);
const originalLoad = Module._load;

Module._load = function patchedLoad(request, parent, isMain) {
  const exported = originalLoad.apply(this, arguments);
  let resolvedRequest;

  try {
    resolvedRequest = Module._resolveFilename(request, parent, isMain);
  } catch (error) {
    return exported;
  }

  if (resolvedRequest === devServerConfigPath) {
    return function createPatchedDevServerConfig(proxy, allowedHost) {
      const config = exported(proxy, allowedHost);
      const runBeforeSetup = config.onBeforeSetupMiddleware;
      const runAfterSetup = config.onAfterSetupMiddleware;

      delete config.onBeforeSetupMiddleware;
      delete config.onAfterSetupMiddleware;

      config.setupMiddlewares = function setupMiddlewares(middlewares, devServer) {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }

        if (typeof runBeforeSetup === 'function') {
          runBeforeSetup(devServer);
        }

        if (typeof runAfterSetup === 'function') {
          runAfterSetup(devServer);
        }

        return middlewares;
      };

      return config;
    };
  }

  return exported;
};

require('react-scripts/scripts/start');
