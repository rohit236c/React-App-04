import React, {Component} from 'react';
import './App.css'
import {recipes} from './tempList'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'

class App extends Component {
    state = {
        recipe: recipes,
        url: "https://www.food2fork.com/api/search?key=f30e059543d3bbd9d62082af60247914"
    }

    async getRecipe() {

        try {
            const getData = await fetch(this.state.url)
            const jsonData = await getData.json();
            this.setState({recipe: jsonData.recipes})
        } catch (error) {
            console.log(error)
        }

    }

    componentDidMount(){
        console.log("comp did mount")
        this.getRecipe()
    }

    render() {
        // console.log("render runs")
        console.log(this.state.recipe)
        return (
            <React.Fragment>
                <RecipeList recipes = {this.state.recipe}/>
                <RecipeDetails/>
            </React.Fragment>
        )

    }
}

export default App;