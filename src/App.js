import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import Categories from "./Components/Categories";
import ShowFullItem from "./Components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
        {
          id: 1,
          title:'Стул серый',
          img: "/chair-grey.JPG",
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'chairs',
          price:'49.99'
        },
        {
          id: 2,
          title:'Стол',
          img: '/table.jpg',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'tables',
          price:'149.99'
        },
        {
          id: 3,
          title:'Диван',
          img: '/sofa.jpg',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'sofa',
          price:'549.99'
        },
        {
          id: 4,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 5,
          title:'Стул белый',
          img: '/chair-white.jpg',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'chairs',
          price:'49.99'
        },
        {
          id: 6,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 7,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 8,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 9,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 10,
          title:'Лампа',
          img: '/wall-light.webp',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'light',
          price:'25.00'
        },
        {
          id: 11,
          title:'Стул белый',
          img: '/chair-white.jpg',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'chairs',
          price:'49.99'
        },
        {
          id: 12,
          title:'Диван',
          img: '/sofa.jpg',
          desc: 'Lorem cho sluchlos, y tebya lel',
          category:'sofa',
          price:'549.99'
        },
      ],
      showFullItem:false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem:!this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems:this.state.items})
      return
    }

    this.setState({
      currentItems:this.state.items.filter(el=>el.category === category)
    })
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el=> {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders, item] },)
  }
}

export default App;
