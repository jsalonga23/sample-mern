import React, { Component } from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{


  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Steak'},
        {id: uuid(), name: 'Water'},
      ]
    }

    this.showList = this.showList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  showList() {
    const name = prompt('Enter Item');
    if(name) {
      this.setState(state => ({
        items: [...state.items, {id: uuid(), name}]
      }));
    }
  }

  deleteList(e) {
    var id = e.target.value;
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  }

  render() {

    const {items} = this.state;

    return (

      <Container>
        <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.showList.bind(this)}>Add Item</Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn" color="danger" size="sm" value={id} onClick={this.deleteList.bind(this)}>
                  &times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>

    );

  }

}

export default ShoppingList;
