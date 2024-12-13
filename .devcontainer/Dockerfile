FROM oven/bun:1

# Config Bun
ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Update packages
RUN apt-get update

# Install Git
RUN apt-get install -y git

# Add bullseye-backports workaround to get newer version of git, required for lefthooks.
RUN echo "deb http://deb.debian.org/debian bullseye-backports main" >/etc/apt/sources.list.d/bullseye-backports.list

RUN apt-get update
RUN apt-get install -y git/bullseye-backports