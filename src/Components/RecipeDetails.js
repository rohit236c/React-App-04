import React, {Component} from 'react'
import {recipe} from '../tempDetails';
export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=f30e059543d3bbd9d62082af60247914&rId=${this.props.id}`
        }
    }

     

//    async componentDidMount(){
//         try {
//                     const getData = await fetch(this.state.url)
//                     const jsonData = await getData.json();
//                     this.setState({recipe: jsonData.recipe})
//             } 
//             catch (error) {
//                     console.log(error)
//             }
       
//     }

    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients

        } = this.state.recipe
      const {handleIndex} = this.props;  

        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-10 mx-auto col-md-6 my-3">
                            <button type="button"  onClick={() => { handleIndex(1) }} className="btn mb-5 btn-warning text-capitalize">BACK TO LIST</button>
                            <img src={image_url} className="d-block " alt="recipe"/>
                        </div>
                        {/* {col-2 for details} */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-slanted text-capitalize">Published By {publisher}</h6>
                            <a
                                href={publisher_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
                            <a
                                href={source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2 mx-3 text-capitalize">recipe page</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {ingredients.map((item, index) => {
                                    return (
                                        <li key={index} className="list-group-item text-slanted">{item}</li>
                                    )
                                })
}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
