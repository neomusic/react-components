import React from 'react';
import cx from 'classnames';
import { enums } from 'tcomb';
import FlexView from 'react-flexview';
import { props  } from 'tcomb-react';
import { pure, skinnable } from 'revenge';

const propsTypes = {
  arrowDir: enums.of('up down up-down')
};

const template = ({ arrowDir, className }) => {
  return (
    <FlexView column vAlignContent='center' className={cx('arrow', className )}>
    {arrowDir !== 'down' && <FlexView className='up' marginBottom={arrowDir !== 'up' ? 2 : 0} />}
    {arrowDir !== 'up' && <FlexView className='down' marginTop={arrowDir !== 'down' ? 2 : 0}  />}
    </FlexView>
  );
};

@skinnable(template)
@pure
@props(propsTypes)
export default class Arrow extends React.Component {}
