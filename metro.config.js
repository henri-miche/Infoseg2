const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const styledNativePath = path.resolve(
  __dirname,
  'node_modules/styled-components/native/dist/styled-components.native.cjs.js'
);

const LOG_STYLED = process.env.METRO_LOG_STYLED !== '0';

function isStyledComponentsWebBuild(resolvedPath) {
  if (!resolvedPath || typeof resolvedPath !== 'string') return false;
  const normalized = path.normalize(resolvedPath).replace(/\\/g, '/');
  const isWeb =
    normalized.includes('styled-components') &&
    normalized.includes('styled-components.cjs.js') &&
    !normalized.includes('.native.');
  return isWeb;
}

function isWebPlatform(platform) {
  return platform === 'web';
}

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const isNonWeb = !isWebPlatform(platform);
  const isStyledRequest =
    moduleName === 'styled-components' ||
    moduleName === 'styled-components/native' ||
    (typeof moduleName === 'string' && moduleName.includes('styled-components'));

  if (LOG_STYLED && isStyledRequest) {
    console.log('[Metro styled] REQ moduleName=', JSON.stringify(moduleName), 'platform=', platform, 'origin=', context.originModulePath ? path.relative(__dirname, context.originModulePath) : '?');
  }

  const moduleNameNorm = typeof moduleName === 'string' ? moduleName.replace(/\\/g, '/') : '';
  const isRequestingWebByPath =
    moduleNameNorm.includes('styled-components') &&
    moduleNameNorm.includes('styled-components.cjs.js') &&
    !moduleNameNorm.includes('.native.');

  if (
    isNonWeb &&
    (moduleName === 'styled-components' ||
      moduleName === 'styled-components/native' ||
      isRequestingWebByPath)
  ) {
    if (LOG_STYLED) console.log('[Metro styled] REDIRECT by name/path -> native');
    return { type: 'sourceFile', filePath: styledNativePath };
  }

  const result = context.resolveRequest(context, moduleName, platform);
  const resolvedPath = result?.type === 'sourceFile' ? result.filePath : null;
  const isWebBuild = resolvedPath && isStyledComponentsWebBuild(resolvedPath);

  if (LOG_STYLED && (isStyledRequest || isWebBuild)) {
    console.log('[Metro styled] RESOLVED path=', resolvedPath ? path.relative(__dirname, resolvedPath) : result, 'isWebBuild=', isWebBuild);
  }

  if (isNonWeb && result?.type === 'sourceFile' && isWebBuild) {
    if (LOG_STYLED) console.log('[Metro styled] REDIRECT resolved web build -> native');
    return { type: 'sourceFile', filePath: styledNativePath };
  }

  return result;
};

module.exports = config;
