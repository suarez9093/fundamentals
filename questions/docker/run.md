# Run an image

- Images contain the container's filesystem that contains everything needed to run the application which include dependencies, config, scripts etc.

`docker run -d -p 80:80 docker/getting-started` is the same as `docker run -dp 80:80 docker/getting-started`

1. `-d` run the container in detached mode (in the background)
2. `-p 80:80` map port 80 to the host to port 80 in the container
3. `docker/getting-started` the image to use

- Open the docker dashboard and you'll see the container running

# Container

- A container is another process on your machine that has been isolated from all other processes on the host machine. This isolation leverages (kernels, namespaces and cgroups)
  b
