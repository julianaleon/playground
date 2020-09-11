import React from 'react';
import ButtonBase from './ButtonBase';
import classNames from 'classnames';
import './Button.less';

function Button(props) {
    let buttonClasses = classNames('btn-default', props.className);
    // Should whitelist this
    return <ButtonBase {...props} className={'brownbag'} />;
}

Button.propTypes = {
    ...ButtonBase.propTypes,
    label: PropTypes.string
};

Button.defaultProps = {
    ...ButtonBase.defaultProps,
    label: 'white'
};

export default Button;
