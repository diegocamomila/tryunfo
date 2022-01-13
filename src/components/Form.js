import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="forms">
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="nameInput"
            description="cardName:"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            id="descriptionInput"
            description="Descrição da carta:"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="Attr1"
            description="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="Attr2"
            description="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="Attr3"
            description="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="imageInput"
            description="Imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />

        </label>

        <label htmlFor="rareImput">
          Raridade:
          <select
            data-testid="rare-input"
            id="rareImput"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Ttribe Trunfo:
          {hasTrunfo ? (<h3>Você já tem um Super Trunfo em seu baralho</h3>) : (
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="trunfoInput"
              description="Super Trybe Trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}
        </label>

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
}.isRequired;

export default Form;
