VERSION 0.8
FROM clojure:temurin-23-noble
DO github.com/earthly/lib+INSTALL_DIND

# setup dind for easy caching
# FROM earthly/dind:ubuntu-24.04-docker-27.3.1-1

RUN apt update
RUN apt -qq install -y rlwrap curl unzip wget lcov

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
  RUN wget -nv https://github.com/apple/foundationdb/releases/download/7.3.57/foundationdb-clients_7.3.57-1_amd64.deb
  RUN dpkg -i foundationdb-clients_7.3.57-1_amd64.deb
  RUN echo "docker:docker@127.0.0.1:4500" > /etc/foundationdb/fdb.cluster
  RUN wget -nv --content-disposition https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar

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
  #DO github.com/earthly/lib+INSTALL_DIND
  COPY docker ./docker
  COPY docker-compose.yaml ./
  WITH DOCKER --compose docker-compose.yaml
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
