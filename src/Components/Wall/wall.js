import React from 'react';
import './style.css';
import Brick from '../Brick/brick';

class Wall extends React.Component{

    state = {
        bricks:[]
    }

    constructor(props){
        super(props);
        this.state = {
            bricks: [1,2,3,4]
        };

    }

    addMoreBricks = () => {
        // this.state.bricks.push(5);
        const newBricksArray = [ ...this.state.bricks ];
        newBricksArray.push(newBricksArray.length +1);
        this.setState({
            bricks: newBricksArray
        })
    }


    render = () => {
        return(
            <div className = "wall-container">
            {
                this.state.bricks.map( (brick) => {
                    return <Brick key= {brick} name={brick}/>
                })
            }
            <button className="btn" onClick = {this.addMoreBricks}>Add More</button>
            
            </div>
        )
    }
}
export default Wall;

