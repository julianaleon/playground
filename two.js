import React from 'react';
import ButtonBase from './ButtonBase';
import classNames from 'classnames';
import './Button.less';

function Button(props) {
    let buttonClasses = classNames('btn-default', props.className);

    return <ButtonBase {...props} className={buttonClasses} />;
}

Button.propTypes = {
    ...ButtonBase.propTypes,
    label: PropTypes.string
};

Button.defaultProps = {
    ...ButtonBase.defaultProps,
    label: 'slave'
};

export default Button;
