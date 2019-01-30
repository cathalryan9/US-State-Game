import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: { background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      headerTitle: this.props.title,
      className: this.props.className,
      list: this.props.list,
      selectedItem: this.props.list[0].name
    };
  }


  handleChange(e) {
    this.setState({ selectedItem: e.target.value });
    this.props.switchGameMode(e.target.value);
  }
  render() {
    const { headerTitle, className, list, selectedItem } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {
          <div>
            <Select className={this.state.className}
              onChange={e => this.handleChange(e)}
              value={selectedItem}
            >
              {list.map(item => (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}

            </Select>
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
