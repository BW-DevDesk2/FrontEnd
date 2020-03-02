```javascript
const data = {
  user: {
    id: "shortid",
    name: "First Last",
    createdAt: Date.now,
    tickets: ["shortid"],
    role: {
      isAdmin: Boolean,
      isStudent: Boolean,
      isHelper: Boolean
    }
  },
  tickets: [
    {
      id: "shortid",
      postedBy: {
        id: "shortid",
        name: "First Last"
      },
      createdAt: Date.now,
      title: String,
      description: String,
      attemptedSolution: String,
      responses: ["shortid"],
      categories: [String],
      isOpen: Boolean,
      isResolved: Boolean,
      assignedTo: ["shortid"]
    }
  ],
  solutions: [
    {
      id: "shortid",
      postedBy: {
        id: "shortid",
        name: "First Last"
      },
      createdAt: Date.now,
      text: String
    }
  ]
};
```