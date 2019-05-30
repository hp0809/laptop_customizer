import React from 'react';

class CostSummary extends React.Component {

    render() {
        const summary = Object.keys(this.props.summary)
          .map(key => <div className="summary__option" key={`${key}`}>
            <div className="summary__option__label">{key}</div>
            <div className="summary__option__value">{this.props.summary[key].name}</div>         
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.summary[key].cost) }
            </div>
        </div>)
        
        
    const total = Object.keys(this.props.summary)
          .reduce((acc, curr) => acc + this.props.summary[curr].cost, 0);
        return (
            <>
            <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
                </div>
            </>
        )
    }
}
export default CostSummary