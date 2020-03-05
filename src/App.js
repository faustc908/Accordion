import React from 'react'
import './app.css'


const styles = {
    active: {
        display: 'inherit'
    },
    inactive: {
        display: 'none'
    }
}

class App extends React.Component {

    constructor() {
        super();
        this.state = {
        active: false
         };
         this.toggle = this.toggle.bind(this);
      }

   toggle(){
       this.setState = ({
           active: !this.state.active
       });
   }
    
    render(){

        const stateStyle = this.state.active ? styles.active : styles.inactive;

        return (
            
<section>
    <a onClick = {this.toggle}>
    {this.props.summary}
    </a>
    <p style = {stateStyle}>
    {this.props.details}
    </p>
</section>
        );
    }
}

App.propTypes = {
    summary: React.PropTypes.string.isRequired,
    details: React.PropTypes.string.isRequired
};

export default App;