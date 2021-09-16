import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
export const titleName = (props) => {
    const {title} = props
    return(
        <Helmet>
        <title>{title}</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
    );
}
