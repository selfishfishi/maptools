install: 
	brew install gdal
	pip3 install --upgrade pip
	pip3 install gdal
tiles:
	python3 ./scripts/gdal2tiles.py -l -p raster -z 0-4 -w none master-map.png ./output


