import React from 'react';
import ListItem from './ListItem.js'

class Features extends React.Component {
  render() {

    const features = Object.keys(this.props.features)
          .map(key => {
            let options = this.props.features[key].map((item, index) => {
              let selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              let featureClass = 'feature__option ' + selectedClass;
              return (
                <ListItem
                  updateFeature={() => this.props.updateFeature(key, item)}
                  featureClass= {featureClass}
                  index={index}
                  key={`${key}-${index}`}
                  item = {item}
                />
              )

          });

          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list" >
              { options }
            </ul>
          </div>
          });

  return features
  }
}

export default Features