1. What problem does the context API help solve?

Keeping "state" in a retrievable, central location so it can be accessed conveniently and without the need for prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are "dispatch messages" that, when matched to a specific case in a "reducer", applies some logic to update a state, and that state is stored in a "store", which is a central and readily-accessible location of state storage.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is for the wider application, and component state is just for the individual component. If you need something that's isolated, component state is great, if you need something that touches many components and does so through different "levels" of components, app state is better.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Functions that return logic/functions, and are used for middleware. It applies some "preprocessing" before fully entering a reducer.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API with useContext because it's quick and easy, with little code.