# tidy-json

## Features

- Sorts keys
- Removes trailing commas
- Configurable indentation
- Works with stdin and files
- Fast

## Options

| Flag           | Description                       |
| -------------- | --------------------------------- |
| `--indent <n>` | Spaces per level (default 2)      |
| `--sort`       | Sort object keys                  |
| `--check`      | Exit 1 if the file isn't tidy     |
| `--version`    | Print the version                 |

## Installation

```bash
npm install -g tidyjson
```

## Usage

```bash
tidy-json file.json
```

## License

MIT
