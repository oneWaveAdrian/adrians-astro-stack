FROM oven/bun:1

# Expose Bun as `node` for tools that shell out to it
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Git is required for lefthook (the base image's Debian release ships a recent enough version)
RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*
