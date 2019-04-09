# wait-for

Simple CLI app to wait for a url to load.

## Installation
`npm install -g @kodbruket/wait-for`

## Usage

Wait for http://google.se to be reachable

`wait-for url http://google.se`

You can also wait for a string to be available before moving on, in this case we wait for the string `google` to be present in the response

`wait-for url http://google.se --find google`

By default we wait 2500ms and try 100 times before failing. You can override this with `--max-retries` and `--timeout`:

`wait-for url http://google.se --max-retries 10 --timeout 1000`
