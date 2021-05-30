const importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../icons/', true, /\.svg$/));
} catch (e) {
  /* eslint-disable no-console */
  console.log(e);
}
