import React, { Component } from "react"
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import NativeSelect from '@material-ui/core/NativeSelect'

class Menu extends Component {


  constructor(props) {
    super(props)
	this.toggleList = this.toggleList.bind(this)
	this.handleChange = this.handleChange.bind(this)
    this.state = {
        listOpen: false,
        headerTitle: this.props.title,
        className: this.props.className,
        list: this.props.list,
        selectedItem: this.props.list[0].name
        }
    }

	toggleList(){
		this.setState(prevState => ({
            listOpen: !prevState.listOpen
          }))

	}

	handleChange(e) {

		this.setState({ selectedItem: e.target.value })
		this.props.switchGameMode(e.target.value);

	}
    render(){
		const {listOpen, headerTitle, className, list, selectedItem} = this.state

        return (<div >{<div>
                                         <Select  className={className} onChange={(e)=>this.handleChange(e)} value={selectedItem} onClick={()=> this.toggleList()}>
                                         {list.map((item)=> (<MenuItem style={{left: 0 }} value={item.name} key={item.id}>{item.name}</MenuItem>))}</Select>
                                         </div>}</div>
               )


    }

}

export default Menu