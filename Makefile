NAMESPACE=parking-sharing

install:
	# Install client from client directory
	@echo "Installing client"
	cd client && yarn install

	# Install server from server directory
	@echo "Installing server"
	cd server && yarn install

up:
	docker-compose up -d
down:
	docker-compose down
up-k8s:
	# Update helm dependencies
	@echo "Updating helm dependencies"
	helm dependency update helm/ohad-parking-sharing

	# Install the chart
	@echo "Installing the chart"
	helm upgrade --install \
		ohad-parking-sharing \
		helm/ohad-parking-sharing \
		--create-namespace \
		-n $(NAMESPACE)
down-compose:
	docker-compose down
down-k8s:
	helm uninstall ohad-parking-sharing -n $(NAMESPACE)
local-registry-up:
	docker-compose -f docker-compose-registry.yml up -d
local-registry-down:
	docker-compose -f docker-compose-registry.yml down
