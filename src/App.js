import React, {Component} from 'react';
import './App.css'
import {recipes} from './tempList'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'

class App extends Component {
    state = {
        recipe: recipes,
        url: "https://www.food2fork.com/api/search?key=f30e059543d3bbd9d62082af60247914",
        details_id: 35382,
        pageIndex : 0
    }

//     async getRecipe() {     try {         
//         const getData = await fetch(this.state.url)       
//           const jsonData = await getData.json();
//     this.setState({recipe: jsonData.recipes})    
//  } 
//     catch (error) {
//     console.log(error)    
//  } } 
    
//     componentDidMount(){    
//          console.log("comp didmount")     
//          this.getRecipe() 
//         }

    handleIndex = (index) =>{
        this.setState({
            pageIndex :index
        })
    }

    handleDetails = (index,id) =>{
     this.setState({
         pageIndex : index,
         details_id :id
     })
    }
    displayPage = (index) => {
        switch (index) {
            default:
            case 1:
                return (<RecipeList handleDetails = {this.handleDetails}  recipes={this.state.recipe}/>)
            case 0 :
                   return(<RecipeDetails id={this.state.details_id} handleIndex = {this.handleIndex}/>)
        }

    }

    render() {

        return (
            <React.Fragment>
                {this.displayPage(this.state.pageIndex)}
                
            </React.Fragment>
        )

    }
}

export default App;