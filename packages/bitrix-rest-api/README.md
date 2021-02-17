# bitrix-rest-api

## Status
Work in progress.

## Description
Client for [Bitrix / Bitrix24 REST API](https://dev.1c-bitrix.ru/rest_help/index.php) suitable for NodeJS, Deno or browsers.

## Features
* TypeScript
* Fully defined interfaces for data provided by [bitrix-rest-api-core](../bitrix-rest-api-core) 
* An improved documentation written in English.
* NodeJS, Deno and browser compatible.

## Installation
```bash
npm install bitrix-rest-api
```
or
```bash
yarn add bitrix-rest-api
```

## REST API
* Sale (Online Shop)

## Running unit tests
1. Create an incoming webhook in your Bitrix / Bitrix24 **test** instance.
2. Copy `environment.test.json.dist` to `environment.test.json`
3. Replace `https://example.com/rest/<userId>/<webhookApiKey>` with your Bitrix REST API webhook. Example: https://example.com/rest/1/dfkgjte78d5wdfgh  
4. Run `nx test bitrix-rest-api` or `nx run bitrix-rest-api:test` to execute the unit tests via [Jest](https://jestjs.io).

## License
MIT (c) 2021 Viacheslav Dobromyslov <<viacheslav@dobromyslov.ru>>
