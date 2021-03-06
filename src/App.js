import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";

const statesNames = {
  0: "Alabama", 1: "Alaska", 2: "Arizona", 3: "Arkansas", 4: "California",
  5: "Colorado", 6: "Connecticut", 7: "Delaware", 8: "Florida",
  9: "Georgia", 10: "Hawaii", 11: "Idaho", 12: "Illinois", 13: "Indiana",
  14: "Iowa", 15: "Kansas", 16: "Kentucky", 17: "Louisiana", 18: "Maine",
  19: "Maryland", 20: "Massachusetts", 21: "Michigan", 22: "Minnesota",
  23: "Mississippi", 24: "Missouri", 25: "Montana", 26: "Nebraska",
  27: "Nevada", 28: "New Hampshire", 29: "New Jersey", 30: "New Mexico",
  31: "New York", 32: "North Carolina", 33: "North Dakota", 34: "Ohio",
  35: "Oklahoma", 36: "Oregon", 37: "Pennsylvania", 38: "Rhode Island",
  39: "South Carolina", 40: "South Dakota", 41: "Tennessee", 42: "Texas",
  43: "Utah", 44: "Vermont", 45: "Virginia", 46: "Washington",
  47: "West Virginia", 48: "Wisconsin", 49: "Wyoming"
};

//const cityNames = {
//          0: {markerOffset: markerOffset, name: "New York", coordinates: [-74.0059413, 40.7127837] },
//          1: {markerOffset: markerOffset, name: "Philadelphia", coordinates: [-75.1652215, 39.9525839]},
//          2: {markerOffset: markerOffset, name: "Los Angeles", coordinates: [-118.2436849, 34.0522342] },
//          3: {markerOffset: markerOffset, name: "Chicago", coordinates: [-87.6297982, 41.8781136]},
//          4: {markerOffset: markerOffset, name: "Houston", coordinates: [-95.3698028, 29.7604267] },
//          5: {markerOffset: markerOffset, name: "Phoenix", coordinates: [-112.0740373, 33.4483771]},
//          6: {markerOffset: markerOffset, name: "San Antonio", coordinates: [-98.4936282, 29.4241219] },
//          7: {markerOffset: markerOffset, name: "San Diego", coordinates: [-117.1610838, 32.715738]},
//          8: {markerOffset: markerOffset, name: "Dallas", coordinates: [-96.7969879, 32.7766642] },
//          9: {markerOffset: markerOffset, name: "San Jose", coordinates: [-121.8863286, 37.3382082]},
//          10: {markerOffset: markerOffset, name: "Austin", coordinates: [-97.7430608, 30.267153] },
//          11: {markerOffset: markerOffset, name: "Indianapolis", coordinates: [-86.158068, 39.768403]},
//          12: {markerOffset: markerOffset, name: "Jacksonville", coordinates: [-81.655651, 30.3321838] },
//          13: {markerOffset: markerOffset, name: "San Francisco", coordinates: [-122.4194155, 37.7749295]}
//         }
const markerOffset = -10;
const cityNames = {
  0: {
    markerOffset: markerOffset,
    name: "New York",
    coordinates: [-74.0059413, 40.7127837]
  },
  1: {
    markerOffset: markerOffset,
    name: "Philadelphia",
    coordinates: [-75.1652215, 39.9525839]
  },
  2: {
    markerOffset: markerOffset,
    name: "Los Angeles",
    coordinates: [-118.2436849, 34.0522342]
  },
  3: {
    markerOffset: markerOffset,
    name: "Chicago",
    coordinates: [-87.6297982, 41.8781136]
  },
  4: {
    markerOffset: markerOffset,
    name: "Austin",
    coordinates: [-97.7430608, 30.267153]
  },
  5: {
    markerOffset: markerOffset,
    name: "Phoenix",
    coordinates: [-112.0740373, 33.4483771]
  },

  6: {
    markerOffset: markerOffset,
    name: "Houston",
    coordinates: [-95.3698028, 29.7604267]
  },
  7: {
    markerOffset: markerOffset,
    name: "San Diego",
    coordinates: [-117.1610838, 32.715738]
  },
  8: {
    markerOffset: markerOffset,
    name: "Dallas",
    coordinates: [-96.7969879, 32.7766642]
  },
  9: {
    markerOffset: markerOffset,
    name: "San Francisco",
    coordinates: [-122.4194155, 37.7749295]
  },

  10: {
    markerOffset: markerOffset,
    name: "San Antonio",
    coordinates: [-98.4936282, 29.4241219]
  },
  11: {
    markerOffset: markerOffset,
    name: "Indianapolis",
    coordinates: [-86.158068, 39.768403]
  },
  12: {
    markerOffset: markerOffset,
    name: "Jacksonville",
    coordinates: [-81.655651, 30.3321838]
  },
  13: {
    markerOffset: markerOffset,
    name: "San Jose",
    coordinates: [-121.8863286, 37.3382082]
  }
};

class AlbersUSA extends Component {
  constructor(props) {
    super(props);

    this.handleStateClick = this.handleStateClick.bind(this);
    this.renderMarker = this.renderMarker.bind(this);
    this.renderMarkerText = this.renderMarkerText.bind(this);
    this.switchGameMode = this.switchGameMode.bind(this);
    this.state = {
      highScore: 0,
      currentScore: 0,
      gameMode: "States",
      randomState: Math.floor(Math.random() * (Object.keys(statesNames).length)),
      previousRandomState: -1,
      randomCity: Math.floor(Math.random() * (Object.keys(cityNames).length )),
      previousRandomCity: -1
    };
  }
  renderMarkerText(marker) {
    if (marker == this.state.previousRandomCity) {
      return (
        <text
          textAnchor="middle"
          y={cityNames[marker]["markerOffset"]}
          style={{
            fontFamily: "Roboto, sans-serif",
            fill: "#008000"

          }}
        >
          {cityNames[marker]["name"]}
        </text>
      );
    }
  }

  renderMarker() {
    if (cityNames.length != 0 || cityNames != null) {
      return (
        <Markers>
          {Object.keys(cityNames).map((marker, i) => (
            <Marker
              key={i}
              marker={cityNames[i]}
              style={{
                default: { fill: "#FF5722", position: "fixed", outline: "none" },
                hover: { fill: "#FFFFFF", outline: "none" },
                pressed: { fill: "#FF5722", outline: "none" }
              }}
              onClick={e => this.handleStateClick(e, marker)}
            >
              <circle
                id={`city-${i}`}
                cx={0}
                cy={0}
                r={5}
                style={{
                  opacity: 1
                }}
              />
              {this.renderMarkerText(marker)}
            </Marker>
          ))}
        </Markers>
      );
    }
  }

  handleStateClick(event, entity) {
    const gameMode = this.state.gameMode;
    var randomEntity;
    var previousEntity;

    if (gameMode == "Cities") {
      randomEntity = this.state.randomCity;
      previousEntity = this.state.previousRandomCity;
    } else if (gameMode == "States") {
      randomEntity = this.state.randomState;
      previousEntity = this.state.previousRandomState;
    }
    let currentScore = this.state.currentScore;
    if (randomEntity == entity) {
      currentScore = currentScore + 1;
      this.setState({ currentScore: currentScore });
      if (currentScore > this.state.highScore) {
        this.setState({ highScore: currentScore });
      }
    } else {
      if (currentScore > this.state.highScore) {
        this.setState({ highScore: currentScore, currentScore: 0 });
      } else {
        this.setState({ currentScore: 0 });
      }
    }
    var previousCorrectEntity;
    var correctEntity;

    //Select random state
    if (gameMode == "Cities") {
      this.setState({
        randomCity: Math.floor(Math.random() * (12 + 1)),
        previousRandomCity: this.state.randomCity
      });
      previousCorrectEntity = document.getElementById(`city-${previousEntity}`);
      correctEntity = document.getElementById(`city-${randomEntity}`);
    } else if (gameMode == "States") {
      previousCorrectEntity = document.getElementById(
        `state-${previousEntity}`
      );
      this.setState({
        randomState: Math.floor(Math.random() * (49 + 1)),
        previousRandomState: this.state.randomState
      });
      previousCorrectEntity = document.getElementById(
        `state-${previousEntity}`
      );
      correctEntity = document.getElementById(`state-${randomEntity}`);
    }

    correctEntity.classList.add("correct");

    if (previousCorrectEntity != null) {
      previousCorrectEntity.classList.remove("correct");
    }
  }

  handleCityClick() {}

  switchGameMode(gameMode) {
    //remove correct class from previous entity when the game mode is changed
    var previousCorrectEntity;
    if (this.state.gameMode == "Cities") {
      var previousEntity = this.state.previousRandomCity;
      previousCorrectEntity = document.getElementById(`city-${previousEntity}`);
    } else if (this.state.gameMode == "States") {
      var previousEntity = this.state.previousRandomState;
      previousCorrectEntity = document.getElementById(
        `state-${previousEntity}`
      );
    }
    if (previousCorrectEntity != null) {
      previousCorrectEntity.classList.remove("correct");
    }
    this.setState({ gameMode: gameMode, highScore: 0, currentScore: 0 });
  }

  render() {
    const games = [{ id: 0, name: "States" }, { id: 1, name: "Cities" }];
    const gameMode = this.state.gameMode;
    var showMarkers = false;
    var randomEntity = "States";

    if (gameMode == "Cities") {
      randomEntity = cityNames[this.state.randomCity]["name"];
      showMarkers = true;
    } else if (gameMode == "States") {
      randomEntity = statesNames[this.state.randomState];
    }


    return (
      <div >
	      <div >
	        <Menu
			  className="menu"
	          title="Guess The State!"
	          list={games}
	          switchGameMode={this.switchGameMode}
	        />
	        </div>

        <div className="random-state-name">Find - {randomEntity}</div>
        <ComposableMap
          projection="albersUsa"
          projectionConfig={{
            scale: 1000,
            xOffset: 0,
            yOffset: 0
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup disablePanning>
            {/*<Geographies geography="/US-State-Game/us.json" disableOptimization>*/}
            <Geographies geography="/public/us.json" disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  return (
                    <Geography
                      id={`state-${geography.properties.ID_1 - 1}`}
                      key={`state-${geography.properties.ID_1 - 1}`}
                      cacheId={`state-${geography.properties.ID_1 - 1}`}
                      round
                      geography={geography}
                      projection={projection}
                      onClick={e =>
                        this.handleStateClick(e, geography.properties.ID_1 - 1)
                      }
                    />
                  );
                })
              }
            </Geographies>

            {showMarkers && this.renderMarker()}
          </ZoomableGroup>
        </ComposableMap>
        <div className="scores-container">
          <div className="high-Score">High Score - {this.state.highScore}</div>
          <div className="current-Score">
            Current Score - {this.state.currentScore}
          </div>
        </div>
      </div>
    );
  }
}

export default AlbersUSA;

