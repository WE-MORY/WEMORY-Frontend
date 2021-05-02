import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited{
    color: #4B5364;
  }
`

function LinkAsset() {
    return (
        <StyledLink></StyledLink>
    )
}

export default LinkAsset
