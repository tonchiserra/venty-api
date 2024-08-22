# Node Vertical Slice Boilerplate

### How to run the boilerplate?
1. Copy this repository ```git clone https://github.com/tonchiserra/node-vertical-slice-boilerplate.git```
2. Install the dependencies ```npm install```
3. Run ```npm start```

And happy code :)

### What is "Vertical Slice Architecture"?
#### Vertical Slice Architecture
Vertical Slice Architecture organizes the code into vertical layers, each representing a complete feature from the user interface to the database, rather than traditional horizontal layers like presentation, business logic, and data access.

#### Key Characteristics:
- **Modularity**: Each slice is independent, containing all layers needed for a specific functionality.
- **Isolation**: Changes in one slice do not affect other parts of the system.
- **High Cohesion**: Each slice focuses on a specific feature, making the code more manageable.
- **Scalability**: Teams can work on different slices concurrently without interference.
- **Separation of Concerns**: Groups everything related to a specific functionality in one place.

#### Benefits:
- **Simplified Maintenance**: Modifications can be made in one slice without impacting the rest of the system.
- **Agile Development**: Facilitates quick and efficient implementation of new features.
- **Efficient Testing**: Unit and integration tests can focus on specific slices, reducing effort and time.

#### Example Structure:
In an e-commerce application, slices could include "Product Management," "Order Management," and "User Management." Each slice contains:
- Controllers (handling HTTP requests)
- Services (business logic)
- Repositories (data access)
- Models (data entities)