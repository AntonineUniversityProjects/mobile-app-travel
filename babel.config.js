module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        blacklist: null, // Deprecated
        whitelist: null, // Deprecated
        safe: false,
        allowUndefined: true,
      },
    ],
    "react-native-reanimated/plugin", 
  ],
};
