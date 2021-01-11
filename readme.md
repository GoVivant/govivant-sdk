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
const dev = false
const gvv = new Govivant('API_KEY', dev)
```

## Documentation

#### Authentication

For authentication you must send an email and password.

When something goes wrong, an error object will be returned in the response. If all is well, the API return will come within a data object in the response.

```javascript
gvv.auth.login('test@example.com', '12345')
    .then(response => {
        console.log(response.data)
        // do something...
    })
    .catch(error => {
        console.log(error)
    })

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
- invoices
- logs
- plans
- points
- products
- redeems
- rules
- stores
- subproducts
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

// ------ MANAGE TRANSACTIONS ------

// list all transactions with pagination
gvv.transactions.list()

// search transaction by query
gvv.transactions.search({ customer_id: '5476393df3f4948bd2f95610' })

// get transaction by ID
gvv.transactions.view('5099803df3f4948bd2f98391')

// create a transaction
gvv.transactions.create(data)

// update a transaction
gvv.transactions.update('5099803df3f4948bd2f98391', data)



// ------ UPLOAD RECEIPT ------

let data = new FormData()

data.append('file', {
    uri: receiptImage, //image from camera or gallery
    type: 'image/jpeg', //data type
    name: `image_237974.jpeg` //unique name
})
data.append('customer_id', customer._id) // GoVivant customer id

api.receipts.upload(data)
    .then(result => {
        // do something...
    })
    .catch(error => {
        // do something...
    })

```

`ACCESS TO SOME RESOURCES IN THE API WILL DEPEND ON YOUR ACCESS LEVEL.`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)