import React from 'react';

class SummaryTotal extends React.Component {
    render() {
        const summary = Object.keys(this.props.summary)
          .map(key => <div className="summary__option" key={this.props.summary[key]}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.summary[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.summary[key].cost) }
            </div>
        </div>)

        return summary
    }
}

export default SummaryTotal