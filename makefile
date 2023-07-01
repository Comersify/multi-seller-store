PHONY: run

docker-run:
	docker run store:v0.0

build:
	docker build  . -f DockerFile.dev -t store:v0.0

merge:
	git checkout master && git merge develop

master-push:
	git checkout master && git push master master

dev-push:
	git checkout develop && git push develop develop

