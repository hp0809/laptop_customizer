import React from 'react';
import SummaryTotal from './SummaryTotal';

class CostSummary extends React.Component {

    render() {
        const summary = 
            <SummaryTotal 
                summary={this.props.summary}
                key={this.props.summary}/>
                
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