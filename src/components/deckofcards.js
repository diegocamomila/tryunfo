import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCardes extends React.Component {
  render() {
    const { cardSave } = this.props;
    return (
      <ul>
        {cardSave.map(
          ({
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) => (
            <li key={ cardName }>
              <Card
                className="card"
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </li>
          ),
        )}
      </ul>
    );
  }
}
DeckOfCardes.propTypes = {
  cardSave: PropTypes.shape([
    {
      className: PropTypes.string.isRequired,
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.number.isRequired,
      cardAttr2: PropTypes.number.isRequired,
      cardAttr3: PropTypes.number.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    },
  ]).isRequired,
};

export default DeckOfCardes;
