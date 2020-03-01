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
      solutions: ["shortid"],
      categories: [String],
      isOpen: Boolean,
      isResolved: Boolean,
      assignedTo: ["shortid"],
      meta: {
        field: "value"
      }
    }
  ],
  solutions: [
    {
      id: "shortid",
      postedBy: "shortid",
      createdAt: Date.now,
      text: String
    }
  ]
};
