This is a simple application built on React Native to demonstrate a variety of different components/tools. The both of us (Sam Lee and Jeff Gao) have developed with React in the past and wanted to explore how similar this was.

## App

This project incorporates the various things outlined in the basic Facebook React [tutorial](https://facebook.github.io/react-native/docs/tutorial.html). Additionally, the template for the project was generated using [Create React Native App](https://github.com/react-community/create-react-native-app).

## Contributions

The entirity of this project was partner coded, with the two of us taking turns writing the code for changes we made. 

## Difficulties

We ran into some initial trouble creating and running the React Native project. One workaround we needed was runing ```yarn start``` rather than ```npm start``` which the tutorial suggested. 

When making the TODO list, we had trouble working with the FlatList tag that React Native provides. The context changes so that we can no longer use the class methods that we had previously defined. This was difficult because we wanted to update items from our task list which was stored in our larger component state. To fix this, we defined a new component that wraps the removeItem method within it. In this way, we can lose the reference to the greater class but still be able to call our removeItem method. 

We found that it was fairly difficult to inspect using the iPhone. When it came to basic formatting issues, debugging became very difficult. 
