install: 
	brew install gdal
	pip3 install --upgrade pip
	pip3 install gdal
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
	nvm install node
tiles:
	python3 ./scripts/gdal2tiles.py -l -p raster -z 0-4 -w none master-map.png ./output
inventory:
	python3 ./scripts/create_inventory.py
website: tiles inventory
	cp -R ./output ./map-editor/src/files




