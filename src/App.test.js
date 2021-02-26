import React from 'react';
import { shallow, mount } from 'enzyme/build'
import { render } from '@testing-library/react';
import App from './App';
import { store, persistor } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import CartDropdown from './components/cart-dropdown/cart-dropdown.component';


it('mounts App without crashing', () => {
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  )
})

it('mounts CartDropdown with empty data', () => {
  let wrapper = mount(<Provider store={store}><BrowserRouter><CartDropdown /></BrowserRouter></Provider>)
  expect(wrapper.find('.empty-message').last().text()).toEqual('Your cart is empty');
})
