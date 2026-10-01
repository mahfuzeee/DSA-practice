# HashMap Practice Project

A JavaScript implementation of a custom hash map built for learning and practicing data structures. This project uses separate chaining with linked lists to handle collisions and automatically resizes when the load factor grows too high.

## Features

- Hash map with string-based keys
- Collision handling using linked lists
- Automatic resizing based on a configurable load factor
- Common map operations: set, get, has, remove, clear, keys, values, entries
- Lightweight demo script to test functionality

## Project Structure

```bash
hash-map-op/
├── hashmap.js   # HashMap implementation
├── main.js      # Demo usage and sample operations
└── README.md    # Project documentation
```

## How It Works

The implementation stores items in an array of buckets. Each bucket contains a linked list, so when multiple keys hash to the same index, they are stored in the same bucket chain.

The default configuration is:

- Capacity: 16
- Load factor: 0.75

When the number of stored entries exceeds the threshold, the map doubles in size and rehashes existing entries.

## Usage

Import the class and create a new instance:

```js
import HashMap from "./hashmap.js";

const users = new HashMap();

users.set("alice", 28);
users.set("bob", 35);

console.log(users.get("alice")); // 28
console.log(users.has("bob")); // true
console.log(users.length()); // 2

users.remove("bob");
console.log(users.has("bob")); // false
```

## Available Methods

```js
set(key, value);
get(key);
has(key);
remove(key);
length();
clear();
keys();
values();
entries();
```

## Example Run

```bash
node main.js
```

This prints sample operations such as retrieving values and checking map size after inserting new entries.

## Learning Goals

This project is intended to help practice:

- Hash function design
- Collision resolution
- Dynamic array resizing
- Data structure trade-offs
- JavaScript class-based implementation patterns

## Notes

This is a practice-focused implementation and is designed for learning, not for production-grade performance optimization.
