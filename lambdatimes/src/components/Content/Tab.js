import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({tab, selectedTabHandler, selectedTab}) => {  // replaced props to fix undefined
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`tab ${selectedTab === tab ? 'active-tab' : null}`}
        onClick={() => selectedTabHandler(tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
     >
    </div>
  );
};

// Make sure you include PropTypes on your props.


Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectTab: PropTypes.string,
}


export default Tab;
