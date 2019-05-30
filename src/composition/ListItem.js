import React from 'react';

class ListItem extends React.Component {
    render() {
        const key = this.props.index;
        const item = this.props.item; 
        const cost = this.props.cost;
        return(
            <li key = {this.props.index} className="feature__item">
                <div className={this.props.featureClass}
                  onClick={e => this.props.updateFeature(key, item)}>
                  { this.props.item.name}
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(cost) })
              </div>
            </li>
        )
    }
}

export default ListItem