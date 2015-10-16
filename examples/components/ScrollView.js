import React from 'react';
import { ScrollView } from '../../src';
import partial from 'lodash/function/partial';

const Example = React.createClass({

  propTypes: {},

  mixins: [React.addons.LinkedStateMixin],

  getTemplate() {
    return (
      <div>
        <ScrollView
          className='hello'
          easing='easeInOutQuad'
          scrollPropagation={false}
          style={{backgroundColor: 'blue', maxHeight: 500, marginTop: 100}}>
            {(scrollTo) => (
              <div>
                <div style={{backgroundColor: 'red', height: 200, width: '100%'}}/>
                <div style={{backgroundColor: 'green', height: 200, width: '100%'}}/>
                <div style={{backgroundColor: 'yellow', height: 200, width: '100%'}}/>
                <div style={{backgroundColor: 'black', height: 200, width: '100%'}}/>
                <button onClick={partial(scrollTo, 0, 0, 1500)} />
              </div>
            )}
        </ScrollView>
        <br />
        <ScrollView
          className='hello'
          easing='easeInOutQuad'
          scrollPropagation={false}
          style={{backgroundColor: 'blue', maxHeight: 500, marginTop: 100}}>
            <div>
              <div style={{backgroundColor: 'black', height: 200, width: '100%'}}/>
              <div style={{backgroundColor: 'gray', height: 200, width: '100%'}}/>
              <div style={{backgroundColor: 'brown', height: 200, width: '100%'}}/>
              <div style={{backgroundColor: 'orange', height: 200, width: '100%'}}/>
            </div>
        </ScrollView>
        <div style={{height: 3000}} />
      </div>
    );
  },

  render() {
    return this.getTemplate();
  }

});

export default Example;
