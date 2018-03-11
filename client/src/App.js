import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      once: false,
      sidebarOpen: false
    }

    this.once = false
    this.hoverIn = this.hoverIn.bind(this)
    this.hoverOut = this.hoverOut.bind(this)
    this.openSideBar = this.openSideBar.bind(this)
    this.closeSideBar = this.closeSideBar.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 160) {
        this.nav.classList.add('scrolly')
        this.nav.classList.remove('hide')
        this.title.classList.add('show')
        const children = Array.from(this.burger.children)
        children.forEach(node => node.classList.add('active'))
        if (!this.once) {
          this.once = true
        } 
      } else {
        if (this.once) {
          this.nav.classList.add('hide')
        }
        const children = Array.from(this.burger.children)
        children.forEach(node => node.classList.remove('active'))
        this.nav.classList.remove('scrolly')
        this.title.classList.remove('show')
      }
    })
    window.addEventListener('resize', () => {
      console.log(this.main.style.height)
      this.main.style.height = `${window.outerHeight}px`
    })
  }

  hoverIn () {
    this.burger.classList.add('burger-hover')
  }

  hoverOut () {
    this.burger.classList.remove('burger-hover')
  }

  openSideBar () {
    this.setState({
      sidebarOpen: true
    })
  }

  closeSideBar () {
    this.setState({
      sidebarOpen: false
    })
  }

  render () {
    const styleish = {height: `${window.outerHeight}`}
    const { hoverBurger, sidebarOpen, scrolled } = this.state
    return (
      <div className='container'
        ref={node => this.container = node}>
        <main className='main'
          ref={node => this.main = node}>
          <div className='tint tint-main' />
          <nav ref={node => this.nav = node}>
            <h4 ref={node => this.title = node}>GIO'S</h4>
            <div 
              ref={node => this.burger = node}
              className='burger'
              onMouseEnter={this.hoverIn}
              onMouseLeave={this.hoverOut}
              onClick={this.openSideBar}>
              <div className='burger-row' />
              <div className='burger-row' />
              <div className='burger-row' />
            </div>
          </nav>
          <img 
            src='http://giosberkeley.com/wp-content/uploads/2017/09/gioslogo2.jpg' 
            alt={`Gio's Logo`} 
            className='logo-image' />
          <h1>HEADER</h1>
        </main>
        {
          // <section className='drinks'>
          //   <div className='col-half'>
          //     <img src='./images/spirits.jpg' alt='drinks menu' />
          //   </div>
          //   <div className='col-half'>

          //   </div>
          // </section>
        }
        <section ref={node => this.limit = node} className='the-food'>
          <div className='tint tint-section' />
          <h2>THE FOOD</h2>
        </section>
        <section className='the-space'>
          <div className='tint tint-section' />
          <h2>THE SPACE</h2>
        </section>
        <footer>
          <div className='footer-left'>
            <h3>GIOS PIZZA & BOCCE</h3>
            <address>
              2420 Shattuck Ave<br />
              Berkeley, CA 94704<br />
              (510) 123 - 4567
            </address>
          </div>
          <div className='footer-right'>
            <h3>CONTACT US</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
            </form>
          </div>
        </footer>
        <div className={`veil ${sidebarOpen ? 'veil-active' : ''}`} />
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <img 
            className={`sidebar-close ${sidebarOpen ? 'sidebar-close-active' : ''}`} 
            src='./images/x.svg'
            onClick={this.closeSideBar} />
          <ul className='sidebar-menu'>
            <li className='sidebar-menu-option'>MENU</li>
            <li className='sidebar-menu-option'>DRINKS</li>
            <li className='sidebar-menu-option'>SPACE</li>
            <li className='sidebar-menu-option'>RESERVATION</li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default App
