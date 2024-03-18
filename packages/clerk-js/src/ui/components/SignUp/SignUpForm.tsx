import React from 'react';

import { Col, localizationKeys, useAppearance } from '../../customizables';
import { Form } from '../../elements';
import { mqu } from '../../styledSystem';
import type { FormControlState } from '../../utils';
import type { ActiveIdentifier, Fields } from './signUpFormHelpers';

type SignUpFormProps = {
  handleSubmit: React.FormEventHandler;
  fields: Fields;
  formState: Record<Exclude<keyof Fields, 'ticket'>, FormControlState<any>>;
  canToggleEmailPhone: boolean;
  handleEmailPhoneToggle: (type: ActiveIdentifier) => void;
};

export const SignUpForm = (props: SignUpFormProps) => {
  const { handleSubmit, fields, formState, canToggleEmailPhone, handleEmailPhoneToggle } = props;
  const { showOptionalFields } = useAppearance().parsedLayout;

  const shouldShow = (name: keyof typeof fields) => {
    // In case both email & phone are optional, then don't take into account the
    // Layout showOptionalFields prop and the required field.
    if ((name === 'emailAddress' || name === 'phoneNumber') && canToggleEmailPhone) {
      return !!fields[name];
    }

    return !!fields[name] && (showOptionalFields || fields[name]?.required);
  };

  return (
    <Form.Root
      onSubmit={handleSubmit}
      gap={8}
    >
      <Col gap={6}>
        {(shouldShow('firstName') || shouldShow('lastName')) && (
          <Form.ControlRow
            elementId='name'
            sx={{
              [mqu.sm]: {
                flexWrap: 'wrap',
              },
            }}
          >
            {shouldShow('firstName') && (
              <Form.PlainInput
                {...formState.firstName.props}
                isRequired={fields.firstName!.required}
                isOptional={!fields.firstName!.required}
              />
            )}
            {shouldShow('lastName') && (
              <Form.PlainInput
                {...formState.lastName.props}
                isRequired={fields.lastName!.required}
                isOptional={!fields.lastName!.required}
              />
            )}
          </Form.ControlRow>
        )}
        {shouldShow('username') && (
          <Form.ControlRow elementId='username'>
            <Form.PlainInput
              {...formState.username.props}
              isRequired={fields.username!.required}
              isOptional={!fields.username!.required}
            />
          </Form.ControlRow>
        )}
        {shouldShow('emailAddress') && (
          <Form.ControlRow elementId='emailAddress'>
            <Form.PlainInput
              {...formState.emailAddress.props}
              isRequired={fields.emailAddress!.required}
              isOptional={!fields.emailAddress!.required}
              isDisabled={fields.emailAddress!.disabled}
              actionLabel={canToggleEmailPhone ? 'Use phone instead' : undefined}
              onActionClicked={canToggleEmailPhone ? () => handleEmailPhoneToggle('phoneNumber') : undefined}
            />
          </Form.ControlRow>
        )}
        {shouldShow('phoneNumber') && (
          <Form.ControlRow elementId='phoneNumber'>
            <Form.PhoneInput
              {...formState.phoneNumber.props}
              isRequired={fields.phoneNumber!.required}
              isOptional={!fields.phoneNumber!.required}
              actionLabel={canToggleEmailPhone ? 'Use email instead' : undefined}
              onActionClicked={canToggleEmailPhone ? () => handleEmailPhoneToggle('emailAddress') : undefined}
            />
          </Form.ControlRow>
        )}
        {shouldShow('password') && (
          <Form.ControlRow elementId='password'>
            <Form.PasswordInput
              {...formState.password.props}
              isRequired={fields.password!.required}
              isOptional={!fields.password!.required}
            />
          </Form.ControlRow>
        )}
      </Col>
      <Form.SubmitButton
        hasArrow
        localizationKey={localizationKeys('formButtonPrimary')}
      />
    </Form.Root>
  );
};
