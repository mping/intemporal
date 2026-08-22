#!/usr/bin/env bash

# Configuration: Set default FDB_VERSION if not provided in environment
FDB_VERSION="${FDB_VERSION:-7.3.62}"

# ANSI Color Codes
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Detect Operating System
OS_NAME="$(uname -s)"

# --- macOS Specific Checks ---
if [ "$OS_NAME" = "Darwin" ]; then
    echo -e "MacOS ARM requires the following:"
    echo -e " - fdb version ${BLUE}${FDB_VERSION}${NC}"
    echo -e " - fdb pkg version ${BLUE}${FDB_VERSION}${NC} (${BLUE}https://github.com/apple/foundationdb/releases/download/${FDB_VERSION}/FoundationDB-${FDB_VERSION}_aarch64.pkg${NC})"
    echo -e " - fdb native libraries ${BLUE}libfdb_c.dylib${NC} and ${BLUE}libfdb_java.jnilib${NC} in ${BLUE}/usr/local/lib${NC}"
    #echo " - eg: # unzip -j ~/.m2/repository/org/foundationdb/fdb-java/${FDB_VERSION}/fdb-java-${FDB_VERSION}.jar lib/osx/aarch64/libfdb_java.jnilib -d /usr/local/lib"

    if [ -f "/usr/local/lib/libfdb_java.jnilib" ]; then
      echo "FDB native libraries found, make sure to run with the following java options:"
      echo "-DFDB_LIBRARY_PATH_FDB_C=/usr/local/lib/libfdb_c.dylib"
      echo "-DFDB_LIBRARY_PATH_FDB_JAVA=/usr/local/lib/libfdb_java.jnilib"
    else
      echo -e "FDB jni library is not in in /usr/local/lib"
      echo -e "to extract: $ ${BLUE}unzip -j ~/.m2/repository/org/foundationdb/fdb-java/${FDB_VERSION}/fdb-java-${FDB_VERSION}.jar lib/osx/aarch64/libfdb_java.jnilib -d /usr/local/lib${NC}"
    fi
else
    echo "Not macOS, skipping platform-specific instructions."
fi

# --- General Status Check ---
echo -e "Checking FDB status..."

# Check if fdbcli exists
if command -v fdbcli &> /dev/null; then
    fdbcli -C docker/fdb.cluster --exec "status json" | jq .client.database_status
else
    echo "Error: 'fdbcli' command not found."
fi

