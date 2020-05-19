

# Employee Directory Application


## Summary 
 The app lets you get basic information about all the employees at a workplace. This app was built from scratch with the help of the javascript library called React. After drawing out the various sections of the application, ReactJS was used to build stateful and stateless components. The stateful component is class based and the stateless components are functions. The SRC folder where most of the code was added was divided into components, layout, and hoc folders. Each folder housed components with different uses. 

appi.herokuapp.com/)

## App Photo
![App Photo](https://github.com/Jules-Boogie/employee-directory/blob/master/employees/public/Capture.PNG)



# Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |




## Code Snippet
The handleSearchField function is added to the search button as an Onclick event. What it does is to go through every person in the stores employee array and compare the current person's name to the search value in the search box. It stores the returned value into the searchResult variable which is then set as the key to employee in the setState object below. 
```
handleSearchField = (event) =>{
         event.preventDefault(); 
         var searchResult = this.state.employee.filter(person => person.firstName.toLowerCase() === this.state.search)
                this.setState({
                    employee: searchResult
                })
     }

```

## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/employee-directory.git ``` with terminal in the directory of your choice. 



## Installation Procedures
```
$ npx create-react-app <myappname>
$ npm axios


```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
