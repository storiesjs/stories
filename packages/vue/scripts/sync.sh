# Copy @stories-js/components dist
rm -rf node_modules/@stories-js/components/dist node_modules/@stories-js/components/components
cp -a ../core/dist node_modules/@stories-js/components/dist
cp -a ../core/components node_modules/@stories-js/components/components
cp -a ../core/package.json node_modules/@stories-js/components/package.json
