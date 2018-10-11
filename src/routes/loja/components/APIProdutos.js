import React from 'react';

class Lista extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         produtos: null
       };
   }

   componentDidMount() {
      fetch("https://api.myjson.com/bins/uruic")
      .then(res => res.json())
      .then(
        (result) => {
           this.props.getProduto(result.items);
          this.setState({
            produtos: result.items
          });
        },
        (error) => {console.log(error)});
      
   }
   render() {
      return (<code className="d-none"></code>);
   }
}

export default Lista;