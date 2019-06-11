import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import deepEqual from 'deep-equal';

class NodeHeader extends Component {
    shouldComponentUpdate(nextProps) {
        const props = this.props;
        const nextPropKeys = Object.keys(nextProps);

        for (let i = 0; i < nextPropKeys.length; i++) {
            const key = nextPropKeys[i];
            if (key === 'animations') {
                continue;
            }

            const isEqual = shallowEqual(props[key], nextProps[key]);
            if (!isEqual) {
                return true;
            }
        }

        return !deepEqual(props.animations, nextProps.animations, {strict: true});
    }

    render() {
        const {animations, decorators, node, onClick, style, onRightClick} = this.props;
        const {active, children} = node;
        const terminal = !children;
        let styles;
        if (active) {
            styles = Object.assign(style, {container: {...style.link, ...style.activeLink}});
        } else {
            styles = style;
        }
        return (
<<<<<<< HEAD:src/components/header.js
            <decorators.Container animations={animations}
                                  decorators={decorators}
                                  node={node}
                                  onClick={onClick}
                                  onRightClick={onRightClick}
                                  style={headerStyles}
                                  terminal={terminal}/>
=======
            <decorators.Container
                {...{animations, decorators, node, onClick, terminal}}
                style={styles}
            />
>>>>>>> 4d09c82da9da0d89ff4ecaa170f2b2eea5876636:src/components/NodeHeader.js
        );
    }
}

NodeHeader.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onRightClick: PropTypes.func
};

export default NodeHeader;
