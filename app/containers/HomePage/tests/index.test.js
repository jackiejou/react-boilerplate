/**
 * Test the HomePage
 */

import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { HomePage, mapDispatchToProps } from '../index';
import { changeMessage } from '../actions';

describe('<HomePage />', () => {
  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          message=""
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeMessage).toBeDefined();
      });

      it('should dispatch changeMessage when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const message = 'testabc';
        result.onChangeMessage({ target: { value: message } });
        expect(dispatch).toHaveBeenCalledWith(changeMessage(message));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
