[![N|Solid](https://i.ibb.co/Jx5QgfC/govivant-logo-horizontal.png)](https://govivant.com)

# GoVivant SDK Client

GoVivant is a javascript library for rewards, prizes and experiences.

## Installation

Use the package manager *npm* to install GoVivant.

```bash
npm install govivant-sdk
```
Or *yarn*

```bash
yarn add govivant-sdk
```

## Usage

First start the client by passing API_KEY as a parameter.

```javascript
import Govivant from 'govivant-sdk'

const gvv = new Govivant('API_KEY')
```

## Documentation

#### Authentication

For authentication you must send an email and password.

When something goes wrong, an error object will be returned in the response. If all is well, the API return will come within a data object in the response.

```javascript
const response = await gvv.auth.login('test@example.com', '12345')

if (!response.error) {
    console.log(response.data)
    // do something...
} else {
    console.log(response.error)
}

```

#### API resources

- users
- tags
- businesses
- categories
- cities
- countries
- customers
- integrations
- points
- products
- redeems
- rules
- stores
- transactions

For all of the above resources there are the following methods:

- *list()*
- *search()*
- *view()*
- *create()*
- *update()*
- *remove()*

Example:

```javascript

// list all transactions with pagination
const list = await gvv.transactions.list()

// search transaction by query
const search = await gvv.transactions.search({ customer_id: '5476393df3f4948bd2f95610' })

// get transaction by ID
const view = await gvv.transactions.view('5099803df3f4948bd2f98391')

// create a transaction
const create = await gvv.transactions.create(data)

// update a transaction
const update = await gvv.transactions.update('5099803df3f4948bd2f98391', data)

```

`ACCESS TO SOME RESOURCES IN THE API WILL DEPEND ON YOUR ACCESS LEVEL.`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)