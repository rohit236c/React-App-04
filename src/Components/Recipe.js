import React, {Component} from 'react'

export default class Recipe extends Component {

    render() {
        const {image_url, title, publisher, source_url, recipe_id} = this.props.recipe;
        return (
            <React.Fragment >
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img
                            src={image_url}
                            className="img-card-top"
                            alt="recipe"
                            style
                            ={{
                            height: "14rem"
                        }}/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">
                                provided by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize">Details</button>
                            <a 
                            target = "_blank"
                            rel = "noopener noreferrer"
                            className="btn btn-success mx-2 
                            text-capitalize" href={source_url}
                            >recipe list
                            </a>
                        </div>

                    </div>

                </div>
              
            </React.Fragment>
        )
    }
}
