# Set-Up

Run `yarn`

## Environment Variables

The app by default uses mock data.

If you want to use a read endpoint you can create a `.env` file. See the `.env.example` file for an example.

**Automatic Behavior:**

- If `VITE_VEGA_API_URL` is set to a non-empty value, the app will automatically use the provided url.

- If `VITE_VEGA_API_URL` is not set or is empty, the app will use hardcoded mock data.

## Running

`yarn run dev`

## Running tests

`yarn test:run`

or

`yarn test`
