VERSION 0.8
FROM clojure:temurin-23-noble

RUN apt update
RUN apt install -y rlwrap curl unzip wget lcov

### nodejs
RUN curl -sL https://deb.nodesource.com/setup_20.x  | bash - && apt-get install -y nodejs

WORKDIR /build

### clj-kondo
RUN curl -sLO https://raw.githubusercontent.com/clj-kondo/clj-kondo/master/script/install-clj-kondo
RUN chmod +x install-clj-kondo
RUN ./install-clj-kondo

deps:
  # copy all relevant files
  COPY deps.edn tests.edn shadow-cljs.edn package.json /build
  CACHE ./node_modules
  CACHE ~/.m2
  RUN clj -Stree
  RUN npm install
  RUN wget https://github.com/apple/foundationdb/releases/download/7.1.31/foundationdb-clients_7.1.31-1_amd64.deb
  RUN dpkg -i foundationdb-clients_7.1.31-1_amd64.deb
  RUN echo "docker:docker@127.0.0.1:4500" > /etc/foundationdb/fdb.cluster

build-base:
  FROM +deps
  # copy src here cause we want to maximize chance to cache deps
  COPY --dir .clj-kondo build bin dev src doc test resources /build

lint:
  FROM +build-base
  RUN clj-kondo --parallel --lint src
  RUN clj-kondo --parallel --lint test
build-main:
  FROM +build-base
  RUN clj -T:build compile-main
build-dev:
  FROM +build-main
  RUN clj -T:build compile-dev
build-jar:
  FROM +build-dev
  RUN clj -T:build jar
build-cljs:
  FROM +build-base
  RUN npx shadow-cljs compile doc

build-all:
  BUILD +lint
  BUILD +build-main
  BUILD +build-dev
  BUILD +build-jar
  BUILD +build-cljs

test:
  FROM +build-base
  DO github.com/earthly/lib+INSTALL_DIND
  COPY docker ./docker
  COPY docker-compose.yml ./
  WITH DOCKER --compose docker-compose.yml
    RUN bin/run-coverage
  END
  SAVE ARTIFACT ./coverage AS LOCAL ./coverage
  SAVE ARTIFACT ./target AS LOCAL ./target

# dev targets
dev-up:
    LOCALLY
    RUN docker-compose up

dev-down:
    LOCALLY
    RUN docker-compose down
