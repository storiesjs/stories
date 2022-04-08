# Copy @stories-js/core dist
rm -rf node_modules/@stories-js/core/dist node_modules/@stories-js/core/components
cp -a ../core/dist node_modules/@stories-js/core/dist
cp -a ../core/components node_modules/@stories-js/core/components
cp -a ../core/package.json node_modules/@stories-js/core/package.json
