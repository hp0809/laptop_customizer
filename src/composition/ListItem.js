import React from 'react';

class ListItem extends React.Component {
    render() {
        const key = this.props.features;
        const item = this.props.item; 
        return(
            <li key={this.props.index} className="feature__item">
                <div className={this.props.featureClass}
                  onClick={e => this.props.onClick(key, item)}>
                  { this.props.item}
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.cost) })
              </div>
            </li>
        )
    }
}

export default ListItem