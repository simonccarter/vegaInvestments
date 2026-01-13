import { type Asset } from '@/api/vega/schemas'

/**
 * Mock assets data for development and testing
 * Includes all assets referenced in portfolio positions plus many more
 */
export const mockAssets: Asset[] = [
  // Assets used in portfolio positions (must match UUIDs in portfolio.ts)
  {
    id: 'a1b2c3d4-e5f6-4789-8bcd-ef1234567890',
    name: 'AAPL',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-9cde-f12345678901',
    name: 'MSFT',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-acde-123456789012',
    name: 'AMZN',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-bdef-234567890123',
    name: 'GOOGL',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8ef0-345678901234',
    name: 'TSLA',
    type: 'stock',
  },
  // Additional stocks
  {
    id: 'f6a7b8c9-d0e1-4234-9f01-456789012345',
    name: 'META',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'NVDA',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'JPM',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'V',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'JNJ',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'WMT',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'MA',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'PG',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'KO',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'INTC',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'CSCO',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'PEP',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'VZ',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'T',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'HD',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'NKE',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'ADBE',
    type: 'stock',
  },
  // Cryptocurrencies
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'BTC',
    type: 'crypto',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'ETH',
    type: 'crypto',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'BNB',
    type: 'crypto',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'SOL',
    type: 'crypto',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'ADA',
    type: 'crypto',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'XRP',
    type: 'crypto',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'DOT',
    type: 'crypto',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'DOGE',
    type: 'crypto',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'AVAX',
    type: 'crypto',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'LINK',
    type: 'crypto',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'MATIC',
    type: 'crypto',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'LTC',
    type: 'crypto',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'UNI',
    type: 'crypto',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'ATOM',
    type: 'crypto',
  },
  {
    id: '888eb9bd-777b-476c-bc04-d3e260ff5a6e',
    name: 'ALGO',
    type: 'crypto',
  },
  {
    id: 'dd9986eb-f915-4048-9001-f28ad352f9c3',
    name: 'VET',
    type: 'crypto',
  },
  {
    id: '512e3a4a-a0bf-4330-8f10-49fe1f2f1359',
    name: 'FIL',
    type: 'crypto',
  },
  {
    id: '88615997-9ecf-4b70-9b13-825bb2c3d4b1',
    name: 'GRT',
    type: 'crypto',
  },
  {
    id: 'f298162e-cc5c-4a69-883f-c98de6238202',
    name: 'AAVE',
    type: 'crypto',
  },
  {
    id: '5f52d00e-2fc7-4593-839d-857b58a561e8',
    name: 'MKR',
    type: 'crypto',
  },
  {
    id: 'be32ff4a-f22f-420c-8624-7dc58282598b',
    name: 'COMP',
    type: 'crypto',
  },
  // Fiat currencies
  {
    id: '66458dcc-cc63-490a-a5cf-83a203f8277e',
    name: 'USD',
    type: 'fiat',
  },
  {
    id: '4610565d-e173-4311-842a-31274993bca5',
    name: 'EUR',
    type: 'fiat',
  },
  {
    id: '768822de-bda5-4112-b7cf-e29c0f80e01c',
    name: 'GBP',
    type: 'fiat',
  },
  {
    id: '94834cc4-2378-47e1-a373-0d918aae834d',
    name: 'JPY',
    type: 'fiat',
  },
  {
    id: '05495ec0-7a0b-4a7d-b093-3f66629ab19a',
    name: 'CHF',
    type: 'fiat',
  },
  {
    id: 'e53aec09-f8d5-4d68-a890-46e779df70a1',
    name: 'CAD',
    type: 'fiat',
  },
  {
    id: '94660187-0648-4078-9f6e-23bdf3f89f1b',
    name: 'AUD',
    type: 'fiat',
  },
  {
    id: '775788a2-44db-418a-9761-1b3492452fa4',
    name: 'NZD',
    type: 'fiat',
  },
  {
    id: 'ac8c8ccc-b7d1-4217-aebf-433d9facd6f5',
    name: 'SEK',
    type: 'fiat',
  },
  {
    id: '46b4492e-b4bb-468f-9705-a403025db679',
    name: 'NOK',
    type: 'fiat',
  },
  {
    id: 'ad4583c0-3ae3-4d91-a1d9-9d4c982c8673',
    name: 'SGD',
    type: 'fiat',
  },
  {
    id: '8c74a435-145c-4be8-8e7f-6d34fde5603c',
    name: 'HKD',
    type: 'fiat',
  },
  {
    id: 'ba679d1c-a486-40c7-817d-25a111e76f75',
    name: 'CNY',
    type: 'fiat',
  },
  {
    id: '9312e140-d207-4b6a-8c07-f81ce5333cf6',
    name: 'INR',
    type: 'fiat',
  },
  {
    id: '1a4d6d02-51af-4ddc-8f67-dca9ad73e907',
    name: 'KRW',
    type: 'fiat',
  },
  {
    id: '872b7015-ff86-491a-9812-49469b4d3994',
    name: 'BRL',
    type: 'fiat',
  },
  {
    id: '296a514d-5208-40b7-bf9d-59277d133de1',
    name: 'MXN',
    type: 'fiat',
  },
  {
    id: '3d2478c5-f26f-4860-8b8c-a2ef63568105',
    name: 'ZAR',
    type: 'fiat',
  },
  {
    id: '357fe9fb-0ea2-48ca-9ca5-d9cce8ce32fa',
    name: 'RUB',
    type: 'fiat',
  },
  {
    id: '5dd962b1-27ca-4f1c-a6f0-708b20112577',
    name: 'TRY',
    type: 'fiat',
  },
  // More stocks for a comprehensive list
  {
    id: '4632574c-1ff5-47ff-b098-783634ad90fc',
    name: 'NFLX',
    type: 'stock',
  },
  {
    id: 'e7af014d-1e6b-4494-b991-fa6800c26af3',
    name: 'CRM',
    type: 'stock',
  },
  {
    id: '69486e79-3ebf-4261-85d7-3d12d0860113',
    name: 'ORCL',
    type: 'stock',
  },
  {
    id: '02c514d1-1b9c-443f-af16-42aa1c51dd56',
    name: 'IBM',
    type: 'stock',
  },
  {
    id: '2fbb812e-2726-4483-91c6-0305c9e64ef2',
    name: 'GS',
    type: 'stock',
  },
  {
    id: '9d0eb532-da03-473c-89b7-0262254b92ab',
    name: 'MS',
    type: 'stock',
  },
  {
    id: 'b87173b4-a213-4fb5-8341-e97996e15b5e',
    name: 'BAC',
    type: 'stock',
  },
  {
    id: '9c3ae2b8-d3ee-4e82-90ee-ded6d94d4f27',
    name: 'WFC',
    type: 'stock',
  },
  {
    id: 'a4417668-1280-446b-9d45-90fad69dc813',
    name: 'C',
    type: 'stock',
  },
  {
    id: 'a0699d48-72e6-44b4-aa0a-f131edfc67b1',
    name: 'BRK.B',
    type: 'stock',
  },
  {
    id: 'c3f028bd-f531-4a0d-8011-f6b74d88b40a',
    name: 'UNH',
    type: 'stock',
  },
  {
    id: '9ca7144c-f706-4103-aa15-0c0e6f0eadf7',
    name: 'CVS',
    type: 'stock',
  },
  {
    id: 'd3e3a187-ef01-4321-a5e2-9dcd267dbfb4',
    name: 'XOM',
    type: 'stock',
  },
  {
    id: 'a0bc96f2-a277-4f26-bb5d-70056ec8895d',
    name: 'CVX',
    type: 'stock',
  },
  {
    id: '728875c6-9682-444e-bf83-f72e00c02428',
    name: 'BA',
    type: 'stock',
  },
  {
    id: '5300d545-fed3-47b0-8495-7a851939e500',
    name: 'GE',
    type: 'stock',
  },
  {
    id: 'bbbf445e-7687-482b-8d6b-b934b4533043',
    name: 'MMM',
    type: 'stock',
  },
  {
    id: 'e58f1a2e-9c7c-4786-af65-70b0713d07bc',
    name: 'CAT',
    type: 'stock',
  },
  {
    id: 'cbebcef0-e037-445c-a544-51ea70f2d3ef',
    name: 'DE',
    type: 'stock',
  },
  {
    id: 'c3e9f210-d3e6-4ab4-a2bf-0748ebed3691',
    name: 'FDX',
    type: 'stock',
  },
  {
    id: '4bea0071-b553-4523-be98-c1b358eb4e26',
    name: 'UPS',
    type: 'stock',
  },
  {
    id: '04dea033-d9e2-4b40-bf0e-194e60ce0f20',
    name: 'SBUX',
    type: 'stock',
  },
  {
    id: '3a936ea9-5587-43cd-a5fb-d46286f4be55',
    name: 'MCD',
    type: 'stock',
  },
  {
    id: '29921034-af08-4432-bf55-8515f7706b29',
    name: 'DIS',
    type: 'stock',
  },
  {
    id: '437c3cb2-bab2-4939-a911-3db128090634',
    name: 'CMCSA',
    type: 'stock',
  },
  {
    id: 'ab360783-2089-4e45-b600-ba5baa099118',
    name: 'VIAC',
    type: 'stock',
  },
  {
    id: 'c8245aa8-a6b9-4999-9285-444a7a5dfb09',
    name: 'PYPL',
    type: 'stock',
  },
  {
    id: '754eeedd-1537-40d7-b012-3a56cd339a95',
    name: 'SQ',
    type: 'stock',
  },
  {
    id: '970bbe92-073e-4387-bdee-5bf2445d47d4',
    name: 'SHOP',
    type: 'stock',
  },
  {
    id: '89f37b3a-fe15-4569-8979-46bb9597cc3f',
    name: 'ZM',
    type: 'stock',
  },
  {
    id: 'aaec4daf-5900-4e79-b77d-0a954538fcc1',
    name: 'PLTR',
    type: 'stock',
  },
  {
    id: 'b0a05abc-5bc4-4bd1-b587-fa0ad361def9',
    name: 'SNOW',
    type: 'stock',
  },
  {
    id: '2b4db756-b455-4fb6-9193-cdb8bf782e65',
    name: 'DDOG',
    type: 'stock',
  },
  {
    id: '3d72db96-cc54-4c3f-ad40-7872de003447',
    name: 'CRWD',
    type: 'stock',
  },
  {
    id: '30e0ce8d-1bfd-43d8-8a8d-c494b15dab4a',
    name: 'OKTA',
    type: 'stock',
  },
  {
    id: '957a56f0-c05c-40d1-a3db-d98fa134b781',
    name: 'ZS',
    type: 'stock',
  },
  {
    id: '73283a0e-93d5-4c89-9315-2c121b68c689',
    name: 'FTNT',
    type: 'stock',
  },
  {
    id: '8b65537b-0ab3-4fd1-85fe-d74d166c5323',
    name: 'PANW',
    type: 'stock',
  },
  {
    id: '3033f522-6e8d-464d-87fe-468447614f4d',
    name: 'NET',
    type: 'stock',
  },
  {
    id: 'a39b2e73-7572-4091-8840-5048df4c7e7a',
    name: 'FSLY',
    type: 'stock',
  },
  {
    id: '86c9b56c-d499-4ba8-a3be-cd417c46caa0',
    name: 'TWLO',
    type: 'stock',
  },
  {
    id: '97ab050e-75b9-4a0a-ba54-8ad9c0b02330',
    name: 'WORK',
    type: 'stock',
  },
  {
    id: '1097d437-f7b6-44ae-9397-83a2752293f0',
    name: 'ASAN',
    type: 'stock',
  },
  {
    id: 'd78624e0-e6ed-4afb-909d-9929b5cc8f17',
    name: 'TEAM',
    type: 'stock',
  },
  {
    id: '326c6c93-cdcb-4794-8f5a-59d597bbee36',
    name: 'NOW',
    type: 'stock',
  },
  {
    id: '246b8700-376f-4e93-8969-2db0283f376e',
    name: 'WDAY',
    type: 'stock',
  },
  {
    id: '35541f26-604c-4b65-9fed-71d6866d691c',
    name: 'SPLK',
    type: 'stock',
  },
  {
    id: '8718445e-4627-475f-87c4-a5b21e6be78d',
    name: 'ESTC',
    type: 'stock',
  },
  {
    id: '95831240-509b-4a7e-ac80-e593317298e8',
    name: 'MDB',
    type: 'stock',
  },
  {
    id: 'f4cbdd32-1db1-4fd5-8b5a-5fa4432e529c',
    name: 'DBRK',
    type: 'stock',
  },
  {
    id: '578909de-7850-46a4-9a47-977951373f9e',
    name: 'CFLT',
    type: 'stock',
  },
  {
    id: '5003b0ac-ebcd-44da-bf6c-b5b52529c071',
    name: 'GTLB',
    type: 'stock',
  },
  {
    id: '60bfb8a4-ae42-4eab-bcbb-c661ad95fb77',
    name: 'MSFT',
    type: 'stock',
  },
  // Additional technology stocks
  {
    id: '1595ec8f-0807-4074-af2f-07103dd84793',
    name: 'U',
    type: 'stock',
  },
  {
    id: '24ed5892-54ed-413a-8efa-ff8ffee35247',
    name: 'RBLX',
    type: 'stock',
  },
  {
    id: '1d7649ae-1d57-46e6-86b2-ecee4e0cb3a0',
    name: 'ROKU',
    type: 'stock',
  },
  {
    id: '4a8d1544-7c3a-4eb3-b344-3d609e200a59',
    name: 'SPOT',
    type: 'stock',
  },
  {
    id: '02e9105d-2307-41d2-be6a-3bdc468bc0d0',
    name: 'SNAP',
    type: 'stock',
  },
  {
    id: '432e3184-903e-43e1-a80b-be89938b40ea',
    name: 'TWTR',
    type: 'stock',
  },
  {
    id: 'ead7b146-8431-4834-a0d5-b081b248c450',
    name: 'UBER',
    type: 'stock',
  },
  {
    id: 'c94bd7c6-e855-43ce-98f4-eca560de10ff',
    name: 'LYFT',
    type: 'stock',
  },
  {
    id: 'd5c4c152-e77d-47f7-b31b-13ac3e9ad6d7',
    name: 'DASH',
    type: 'stock',
  },
  {
    id: 'dfee8455-cd29-4a66-b3c8-b39dcabdd9b5',
    name: 'ABNB',
    type: 'stock',
  },
  {
    id: 'dc3feafb-6f8f-4919-bd01-9e7540997b0f',
    name: 'BKNG',
    type: 'stock',
  },
  {
    id: '40d27537-c0cd-49f4-8788-5197643d31aa',
    name: 'EXPE',
    type: 'stock',
  },
  {
    id: '3b196b2e-78ee-4230-8647-a93d9e627e82',
    name: 'TRIP',
    type: 'stock',
  },
  // Financial services
  {
    id: 'e3e0e0fa-3767-4d18-87bc-fe2ffa6b557d',
    name: 'AXP',
    type: 'stock',
  },
  {
    id: '99201ed1-7558-49d7-8da0-54bde8a93252',
    name: 'DFS',
    type: 'stock',
  },
  {
    id: 'a4a34f13-cb80-4de0-a35c-0025612399a1',
    name: 'COF',
    type: 'stock',
  },
  {
    id: 'f44c3249-19ca-4ada-bae5-bd02b09ffdb0',
    name: 'SCHW',
    type: 'stock',
  },
  {
    id: '35e1e0fe-3f52-4de7-8dec-d2ffe8e62f26',
    name: 'IBKR',
    type: 'stock',
  },
  {
    id: '0cf5461f-8eff-4419-a9dd-f01d198bdc74',
    name: 'BLK',
    type: 'stock',
  },
  {
    id: '21380a21-f43c-4328-ab38-272d17cf4a92',
    name: 'STT',
    type: 'stock',
  },
  {
    id: '7de5cf0a-1e38-4c40-b3ea-df8a6910c807',
    name: 'NTRS',
    type: 'stock',
  },
  // Healthcare and biotech
  {
    id: '942d4855-0a08-4555-a9da-b971f9abca4f',
    name: 'PFE',
    type: 'stock',
  },
  {
    id: '11ec5858-1184-456a-ae8b-1fbc8a1c386e',
    name: 'MRK',
    type: 'stock',
  },
  {
    id: 'f5589b41-ba31-4d14-86e6-91b4d9509078',
    name: 'ABBV',
    type: 'stock',
  },
  {
    id: '750093e7-0eb1-4c48-b79b-1c19f3101fee',
    name: 'BMY',
    type: 'stock',
  },
  {
    id: 'a1023451-46ae-4f42-a7bc-f75e5808b562',
    name: 'GILD',
    type: 'stock',
  },
  {
    id: '5431f8a7-0841-4f2d-a872-cc9f54d262ab',
    name: 'AMGN',
    type: 'stock',
  },
  {
    id: 'bb1a682c-c2fb-489d-ae49-2cead27a8756',
    name: 'BIIB',
    type: 'stock',
  },
  {
    id: '13fba5bf-cecd-4069-a97a-60caef2c21ba',
    name: 'REGN',
    type: 'stock',
  },
  {
    id: '2a006203-3900-431e-993e-7f34800a57f4',
    name: 'MRNA',
    type: 'stock',
  },
  {
    id: 'a9089913-49c5-4587-9a7b-70968a9204c7',
    name: 'BNTX',
    type: 'stock',
  },
  {
    id: '6c3f7da4-1080-49ae-b3bd-90c72b163247',
    name: 'ILMN',
    type: 'stock',
  },
  {
    id: '6a0078c7-83ea-40d7-b064-ba5497b1f97c',
    name: 'TMO',
    type: 'stock',
  },
  // Consumer goods
  {
    id: '857c1675-62e8-4c7e-8ad6-3e375cd49879',
    name: 'COST',
    type: 'stock',
  },
  {
    id: 'dfd7a86a-9309-4a8e-ae02-b219e43d127e',
    name: 'TGT',
    type: 'stock',
  },
  {
    id: '25d935d3-3665-4a86-ad06-e4616fa22903',
    name: 'LOW',
    type: 'stock',
  },
  {
    id: '6b1637da-d260-412b-a183-3acf49648c00',
    name: 'TJX',
    type: 'stock',
  },
  {
    id: 'd8147fdc-b34a-4052-be28-4b76d489d750',
    name: 'ROST',
    type: 'stock',
  },
  {
    id: '056ac866-ddbc-4730-822f-217a4efe1239',
    name: 'DG',
    type: 'stock',
  },
  {
    id: '21b91dc9-cd37-47ba-be08-2f27af30a81c',
    name: 'DLTR',
    type: 'stock',
  },
  {
    id: '43f7e20f-8e79-4a54-84c4-b18ff03c85fb',
    name: 'KR',
    type: 'stock',
  },
  {
    id: '16580c66-a7f1-4c3e-8b7d-dc5aa0ef97ae',
    name: 'WBA',
    type: 'stock',
  },
  {
    id: '402ab38e-7cf8-4a7d-8dbe-326d86026650',
    name: 'CVS',
    type: 'stock',
  },
  // Energy
  {
    id: '919ef68d-2439-4eae-9f04-26a918013819',
    name: 'COP',
    type: 'stock',
  },
  {
    id: '32a6185d-e4f7-45dc-a5e5-b2f9800cef81',
    name: 'MPC',
    type: 'stock',
  },
  {
    id: 'c818bece-3775-4467-a625-f7d804559bd4',
    name: 'VLO',
    type: 'stock',
  },
  {
    id: 'a6b6e224-3784-4d1f-b55b-a7b81ab71d72',
    name: 'PSX',
    type: 'stock',
  },
  {
    id: '7c5132f4-29d7-4ea6-ac63-d610557f9839',
    name: 'KMI',
    type: 'stock',
  },
  {
    id: '4b0e711b-e056-497e-ad90-b708fcb85c97',
    name: 'EPD',
    type: 'stock',
  },
  // Utilities
  {
    id: 'bef98a39-54a5-45b7-a980-a5023b9c992c',
    name: 'NEE',
    type: 'stock',
  },
  {
    id: 'ad5e8f68-b2e2-4d50-817e-4a62638f6dbb',
    name: 'DUK',
    type: 'stock',
  },
  {
    id: '464ac922-efb2-4fd9-9f4a-65158dc42bfc',
    name: 'SO',
    type: 'stock',
  },
  {
    id: '9ae0c528-c1cd-44cc-8e65-9d76ce5bc984',
    name: 'D',
    type: 'stock',
  },
  {
    id: '79a52ea3-4b26-4a96-a012-52288bd4cf09',
    name: 'AEP',
    type: 'stock',
  },
  // Industrial
  {
    id: 'a73764e3-f1ea-4db3-9918-a00d073c8c61',
    name: 'HON',
    type: 'stock',
  },
  {
    id: '518a5f5f-2a2d-4423-a823-4724b67307ce',
    name: 'RTX',
    type: 'stock',
  },
  {
    id: 'ced1c098-8f4a-4398-80cf-138c271bca5f',
    name: 'LMT',
    type: 'stock',
  },
  {
    id: '88885ed4-6751-4d7b-ab1f-7f0f30b70dd8',
    name: 'NOC',
    type: 'stock',
  },
  {
    id: 'b7e39da1-39b9-4b84-9b39-d8ee5f028139',
    name: 'GD',
    type: 'stock',
  },
  {
    id: '7febb323-ea51-4fa0-8d73-871d9d564499',
    name: 'UTX',
    type: 'stock',
  },
  // More cryptocurrencies
  {
    id: '369222d8-2248-4aff-976b-1423aa31d865',
    name: 'USDT',
    type: 'crypto',
  },
  {
    id: '77cf3e53-00f6-4247-911e-0fd0647a9fb4',
    name: 'USDC',
    type: 'crypto',
  },
  {
    id: '9e835da4-0e05-499d-85aa-34c65942c824',
    name: 'BUSD',
    type: 'crypto',
  },
  {
    id: '4c54a705-a4f7-49f2-bca6-f64d604581f9',
    name: 'LUNA',
    type: 'crypto',
  },
  {
    id: 'e55dc4ad-8a2a-4dc3-bf68-16a3e5d9e890',
    name: 'AVAX',
    type: 'crypto',
  },
  {
    id: '159c5268-f6c5-4ce3-828c-b4197df3f8e7',
    name: 'SHIB',
    type: 'crypto',
  },
  {
    id: 'b0de622a-7ff4-43dd-9d00-0ee8ff7ab8bd',
    name: 'TRX',
    type: 'crypto',
  },
  {
    id: '4138a219-350d-4cfa-9aad-97f9a161ab74',
    name: 'WBTC',
    type: 'crypto',
  },
  {
    id: 'bfa92ba0-3b6e-4650-bfd2-e5405c6ab429',
    name: 'DAI',
    type: 'crypto',
  },
  {
    id: '8e26af19-a757-4220-82b4-536d3e4b8ff4',
    name: 'XLM',
    type: 'crypto',
  },
  {
    id: 'ad23aaad-fecc-4c1a-b157-58c90542f918',
    name: 'XMR',
    type: 'crypto',
  },
  {
    id: '2dd57862-5ecc-490e-9f4c-22f5037e9bbc',
    name: 'EOS',
    type: 'crypto',
  },
  {
    id: 'c8194e69-606e-435d-bee4-193891533aff',
    name: 'XTZ',
    type: 'crypto',
  },
  {
    id: 'afb0501b-41fb-4293-91a8-ce809c2ed726',
    name: 'NEO',
    type: 'crypto',
  },
  {
    id: 'e37a2d67-9c14-4a9e-8999-55a01c072f75',
    name: 'IOTA',
    type: 'crypto',
  },
  {
    id: '8b307780-0d79-45ae-b81b-2183ccf4d4fa',
    name: 'DASH',
    type: 'crypto',
  },
  {
    id: '4988ee3c-65c1-477e-a9bc-393a2355bab6',
    name: 'ZEC',
    type: 'crypto',
  },
  {
    id: 'afe27b35-9077-42ff-9dfd-541c1fd650e3',
    name: 'BCH',
    type: 'crypto',
  },
  {
    id: '2a8db2da-aa0c-4948-88fd-2183a2664bb0',
    name: 'ETC',
    type: 'crypto',
  },
  {
    id: '6b2ca086-c2c8-4e55-8c45-0eb6033c646d',
    name: 'THETA',
    type: 'crypto',
  },
  {
    id: '2d1b8bce-e963-4170-a762-2f32c8e0d1fc',
    name: 'FTM',
    type: 'crypto',
  },
  {
    id: '8c99cd35-a9d4-445f-801c-6f3cde006587',
    name: 'HBAR',
    type: 'crypto',
  },
  // More fiat currencies
  {
    id: '73a4ae37-6df5-4377-a5e1-138cd2cfc45c',
    name: 'PLN',
    type: 'fiat',
  },
  {
    id: 'c48d0182-e4e7-44b6-9686-dfb4404014af',
    name: 'CZK',
    type: 'fiat',
  },
  {
    id: '777a0944-aae8-47a3-a193-7681b0f4e0c2',
    name: 'HUF',
    type: 'fiat',
  },
  {
    id: 'ef2cb01d-83f1-4a33-b3c9-ff37387a0a0f',
    name: 'RON',
    type: 'fiat',
  },
  {
    id: 'ed95a930-60cb-4eb0-a5b1-850b33468d48',
    name: 'BGN',
    type: 'fiat',
  },
  {
    id: '0b124996-b027-47d7-8f73-2c5478eee262',
    name: 'HRK',
    type: 'fiat',
  },
  {
    id: 'f4e96d8b-9fd1-45cc-8fd6-852cf4daf280',
    name: 'DKK',
    type: 'fiat',
  },
  {
    id: 'e422a4f4-a953-4878-a8a6-3ed60218d7ba',
    name: 'ISK',
    type: 'fiat',
  },
  {
    id: '334cd282-ea92-42e6-bea8-efa1b3a96bf2',
    name: 'THB',
    type: 'fiat',
  },
  {
    id: '6af970d9-8193-4a18-991a-a05c06cce1b2',
    name: 'MYR',
    type: 'fiat',
  },
  {
    id: 'ad45d618-07d0-477b-b52c-b85e0f757acf',
    name: 'IDR',
    type: 'fiat',
  },
  {
    id: 'ec4f0534-37d9-48b1-bc08-77c59627b3a3',
    name: 'PHP',
    type: 'fiat',
  },
  {
    id: '24a7a56e-d6d6-4b1d-be71-9baf15e69a1f',
    name: 'VND',
    type: 'fiat',
  },
  {
    id: '6eea03fc-c050-465e-b2a1-b45af9cec64e',
    name: 'TWD',
    type: 'fiat',
  },
  {
    id: '3d0d61dc-5508-4c3e-8e5d-0b60f5d728a7',
    name: 'ILS',
    type: 'fiat',
  },
  {
    id: '850356fa-b1fa-4a18-a6c2-d3396d6ddba2',
    name: 'SAR',
    type: 'fiat',
  },
  {
    id: '9bb013c9-fd79-4184-95a3-818f51253d6c',
    name: 'AED',
    type: 'fiat',
  },
  {
    id: '2fd1e76e-7ea9-4f37-8e0a-e10073d74cdf',
    name: 'QAR',
    type: 'fiat',
  },
  {
    id: 'be750608-8dea-464e-9ff1-4a2f2cf790d2',
    name: 'KWD',
    type: 'fiat',
  },
  {
    id: '71f5f4a3-d6ef-4144-9010-71ca0e1d9f91',
    name: 'EGP',
    type: 'fiat',
  },
  {
    id: 'c8847dc7-3bb6-49d3-b8d0-543c5161d41d',
    name: 'ZAR',
    type: 'fiat',
  },
  {
    id: '64b02dfc-e854-49ed-b1fb-bf9fab04877d',
    name: 'NGN',
    type: 'fiat',
  },
  {
    id: '3d00d22f-5067-4b20-8f27-f2144b5b7b6c',
    name: 'KES',
    type: 'fiat',
  },
  {
    id: 'fff6ccb2-9b37-434f-b2a3-6fa80150cb2d',
    name: 'CLP',
    type: 'fiat',
  },
  {
    id: '9a306f8b-c3e7-42b0-aa63-c840c5d2e57e',
    name: 'ARS',
    type: 'fiat',
  },
  {
    id: '60bfea0e-fa89-45ff-8b19-4cb629526113',
    name: 'COP',
    type: 'fiat',
  },
  {
    id: '900d69aa-a082-4b67-89ce-5deb35e92a5c',
    name: 'PEN',
    type: 'fiat',
  },
]

