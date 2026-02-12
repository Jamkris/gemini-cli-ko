#!/bin/bash

# jq가 설치되어 있는지 확인합니다.
if ! command -v jq &> /dev/null
then
    echo "jq가 설치되어 있지 않습니다. jq를 설치해주세요."
    echo "macOS (Homebrew): brew install jq"
    echo "Debian/Ubuntu: sudo apt-get install jq"
    exit 1
fi

# 인자의 개수가 올바른지 확인합니다.
if [ "$#" -ne 2 ]; then
    echo "사용법: $0 <_meta.json 파일 경로> <파일을 생성할 경로>"
    exit 1
fi

META_FILE=$1
CREATE_PATH=$2

# _meta.json 파일이 존재하는지 확인합니다.
if [ ! -f "$META_FILE" ]; then
    echo "오류: '$META_FILE' 파일을 찾을 수 없습니다."
    exit 1
fi

# 파일을 생성할 경로가 디렉토리인지 확인하고, 없으면 생성합니다.
if [ ! -d "$CREATE_PATH" ]; then
    echo "'$CREATE_PATH' 디렉토리가 존재하지 않아 새로 생성합니다."
    mkdir -p "$CREATE_PATH"
fi

# JSON 파일에서 키를 읽어와 .mdx 파일을 생성합니다.
for key in $(jq -r 'keys | .[]' "$META_FILE"); do
    FILE_NAME="$CREATE_PATH/$key.mdx"
    if [ -e "$FILE_NAME" ]; then
        echo "'$FILE_NAME' 파일이 이미 존재합니다."
    else
        touch "$FILE_NAME"
        echo "'$FILE_NAME' 파일이 생성되었습니다."
    fi
done

echo "파일 생성이 완료되었습니다."
