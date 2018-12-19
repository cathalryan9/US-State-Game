
import React, { Component } from "react"
import "./App.css"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";
import ReactTooltip from 'react-tooltip'

import {SwitchDataButton} from "./SwitchDataButton.js";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",

}

class AlbersUSA extends Component {
  constructor(props) {
    super(props)

    this.handleStateClick = this.handleStateClick.bind(this);
    this.statesNames = {0:'Alabama',1:'Alaska',2:'Arizona',3:'Arkansas',4:'California',5:'Colorado',6:'Connecticut',7:'Delaware',
    8:'Florida',9:'Georgia',10:'Hawaii',11:'Idaho',12:'Illinois',13:'Indiana',14:'Iowa',15:'Kansas',16:'Kentucky',17:'Louisiana',18:'Maine',19:'Maryland',
    20:'Massachusetts',21:'Michigan',22:'Minnesota',23:'Mississippi',24:'Missouri',25:'Montana',26:'Nebraska',27:'Nevada',28:'New Hampshire',
    29: 'New Jersey',30:'New Mexico',31:'New York',32:'North Carolina',33:'North Dakota',34:'Ohio',35:'Oklahoma',36:'Oregon',37:'Pennsylvania',
    38:'Rhode Island',39:'South Carolina',40:'South Dakota',41:'Tennessee',42:'Texas',43:'Utah',44:'Vermont',45:'Virginia',46:'Washington',
    47:'West Virginia',48:'Wisconsin',49:'Wyoming'};


    this.state = {
      dataSet: '',
      stateName: '',
      highScore: 0,
      currentScore: 0,
      randomState: Math.floor(Math.random()*(49-0+1)),
      previousRandomState: -1

    }
  }

  showTooltip(stateName){
  this.setState({displayTooltip: "true",
                 stateName: stateName
                 })
  }
    hideTooltip(){
   this.setState({displayTooltip: "false",
                  stateName: ''
                  })
    }

    handleStateClick(event, state){
    let currentScore = this.state.currentScore;
        if(this.state.randomState == state){
        currentScore = currentScore + 1;
            this.setState({currentScore: currentScore});
            if(currentScore>this.state.highScore){
                    this.setState({highScore: currentScore});
                    }
        }
        else{
            if(currentScore>this.state.highScore){
                this.setState({highScore: currentScore,
                       currentScore: 0});
             }
            else{
                 this.setState({currentScore: 0});
                 }
        }
        var previousCorrectState = document.getElementById(`state-${this.state.previousRandomState}`);
        if(previousCorrectState != null){
            previousCorrectState.classList.remove("correctState");
        }

        var correctState = document.getElementById(`state-${this.state.randomState}`);
        correctState.classList.add("correctState");

        //Select random state
        this.setState({randomState: Math.floor(Math.random()*(49-0+1)),
                        previousRandomState: this.state.randomState});
    }
  render() {
    const { population } = this.state;


    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="albersUsa"
          projectionConfig={{
            scale: 1000,
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup disablePanning>
            <Geographies geography="/us.json" disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  return (
                    <Geography
                      id={`state-${geography.properties.ID_1 -1}`}
                      key={`state-${geography.properties.ID_1 -1}`}
                      cacheId={`state-${geography.properties.ID_1 -1}`}
                      round
                      geography={geography}
                      projection={projection}
                      onClick={(e) => this.handleStateClick(e, geography.properties.ID_1 -1)}
                    >
                       </Geography>


                  )
                }
              )}
            </Geographies>
                      <text x="575" y="500" className="heavy"></text>
          </ZoomableGroup>
        </ComposableMap>
        <div>
        <div className="highScore">High Score - {this.state.highScore}</div>
        <div className="currentScore">Current Score - {this.state.currentScore}</div>
        <div>Random State - {this.statesNames[this.state.randomState]}</div>
       </div>
      </div>
    )
  }
}

export default AlbersUSA