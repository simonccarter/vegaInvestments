# Set-Up

Run `yarn` or `npm install`

Create a `.env` file with `VITE_VEGA_API_KEY` providing your own key.
See `.env.example` for an example

## Running

`yarn run dev`

## Running tests

`yarn test:run`

or

`yarn test

# Known Issues

Time series data can have missing hours/days. These aren't polyfilled with fake entries, such as i = i-1, or averaged out.

Endpoints can return 403 if a query param is used that is not supported in the free tier. I've handled cases by restricting options for parameters i've come across that aren't supported.

Fetching all US stocks (NYSE, nyse, OTC, from https://massive.com/docs/rest/stocks/market-operations/market-status) to populate dropdown would use up rate limits. I've added an example which fetch data from the NYSE option just for this take home.
# vegaInvestments
