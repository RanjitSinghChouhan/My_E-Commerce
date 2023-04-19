import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Cart.css';
import paypalLogo from '../../../../../assets/images/paypal_logo.png';
import { useFormik } from 'formik';
import { Snackbar, Alert } from '@mui/material';
import { billingDetails } from '../../../../../redux/products/productsAction';
import { useNavigate } from 'react-router-dom';
const initialValues = {
  'First name': '',
  'Last name': '',
  'Company name': '',
  'Country / Region': '',
  'Street Address': '',
  'Town / City': '',
  District: '',
  'Postcode / ZIP (optional)': '',
  Phone: '',
  'Email Address': '',
};
const validate = (values) => {
  let errors = {};
  if (!values['First name']) {
    errors['First name'] = 'Required';
  } else if (!/^[A-Za-z]+$/i.test(values['First name'])) {
    errors['First name'] = 'Invalid Text Format';
  }
  if (!values['Last name']) {
    errors['Last name'] = 'Required';
  } else if (!/^[A-Za-z]+$/i.test(values['Last name'])) {
    errors['Last name'] = 'Invalid Text Format';
  }
  if (!values['Country / Region']) {
    errors['Country / Region'] = 'Required';
  } else if (!/^[A-Za-z]+$/i.test(values['Country / Region'])) {
    errors['Country / Region'] = 'Invalid Text Format';
  }
  if (!values['Town / City']) {
    errors['Town / City'] = 'Required';
  } else if (!/^[A-Za-z]+$/i.test(values['Town / City'])) {
    errors['Town / City'] = 'Invalid Text Format';
  }
  if (!values['District']) {
    errors['District'] = 'Required';
  } else if (!/^[A-Za-z]+$/i.test(values['District'])) {
    errors['District'] = 'Invalid Text Format';
  }
  if (!values['Street Address']) {
    errors['Street Address'] = 'Required';
  } else if (!/^[a-zA-Z0-9\s,'-]*$/i.test(values['Street Address'])) {
    errors['Street Address'] = 'Invalid Address Format';
  }
  if (!values['Postcode / ZIP (optional)']) {
    errors['Postcode / ZIP (optional)'] = 'Required';
  } else if (!/^[0-9]*$/i.test(values['Postcode / ZIP (optional)'])) {
    errors['Postcode / ZIP (optional)'] = 'Only Numbers are accepted';
  }
  if (!values['Phone']) {
    errors['Phone'] = 'Required';
  } else if (!/^[0-9]*$/i.test(values['Phone'])) {
    errors['Phone'] = 'Only Numbers are accepted';
  }
  if (!values['Email Address']) {
    errors['Email Address'] = 'Required';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values['Email Address'])) {
    errors['Email Address'] = 'Wrong Email Address';
  }
  return errors;
};
function Checkout() {
  const billingFields = [
    'First name',
    'Last name',
    'Company name',
    'Country / Region',
    'Street Address',
    'Town / City',
    'District',
    'Postcode / ZIP (optional)',
    'Phone',
    'Email Address',
  ];
  const checkoutList = useSelector((state) => state.cartList);
  const cartTotal = useSelector((state) => state.cartTotal);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let total = 0;
  cartTotal.map((item) => (total += item.cost));
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setOpen(true);
      setFirstName(values['First name'] + ' ' + values['Last name']);
      dispatch(billingDetails(values));
      setTimeout(() => {
        navigate('/');
      }, 800);
      // alert(`Billing Details are successfully submitted as First name=${values['First name']}, Last name=${values['Last name']}, Company name=${values['Company name']}, Country / Region=${values['Country / Region']}, Street Address=${values['Street Address']}, Town / City=${values['Town / City']}, District=${values['District']}, Postcode / ZIP (optional)=${values['Postcode / ZIP (optional)']}, Phone=${values['Phone']}, Email Address=${values['Email Address']}`)
    },
    validate,
  });
  return (
    <div>
      <section>
        <div className='container'>
          <div className='shipping-details'>
            <form onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='billing-details'>
                  <h3>Billing Details</h3>
                  <div>
                    {billingFields.map((name) => {
                      return (
                        <div key={name}>
                          <label htmlFor={name} className='form-label billing-fields'>
                            {name}
                            {formik.touched[name] && formik.errors[name] ? (
                              <div style={{ color: 'red', display: 'inline' }}>*</div>
                            ) : null}
                          </label>
                          {/* in the input field either we can use {...formik.getFieldProps(name)} (or) onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[name]}*/}
                          <input
                            type='text'
                            className='form-control billing-fields'
                            id={name}
                            name={name}
                            {...formik.getFieldProps(name)}
                          />
                          {formik.touched[name] && formik.errors[name] ? (
                            <div style={{ color: 'red' }}>{formik.errors[name]}</div>
                          ) : null}
                        </div>
                      );
                    })}
                    <div>
                      <label htmlFor='orderNotes' className='form-label billing-fields'>
                        Order notes (optional)
                      </label>
                      <textarea
                        type='email'
                        className='form-control billing-fields'
                        rows='5'
                        id='orderNotes'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='place-order-wrap'>
                    <h3>Your order</h3>
                    <div className='cart-totals'>
                      <div className='order-list'>
                        <ul>
                          <li>
                            <span>
                              <strong>PRODUCT</strong>
                            </span>
                            <span>
                              <strong>SUBTITLE</strong>
                            </span>
                          </li>
                          {checkoutList.map((item) => {
                            return (
                              <li key={item.id}>
                                <span>
                                  {item.name || item.title} × {item.quantity}
                                </span>
                                <span className='txt-pink'>${item.price * item.quantity}</span>
                              </li>
                            );
                          })}
                          {cartTotal.map((item) => {
                            return (
                              <li key={item.id}>
                                <span>
                                  <strong>{item.name}</strong>
                                </span>
                                <span className='txt-pink'>${item.cost}</span>
                              </li>
                            );
                          })}
                          <li>
                            <span>
                              <strong>Total</strong>
                            </span>
                            <span className='txt-pink'>${total}</span>
                          </li>
                          <li className='cart-elements'>
                            <div>
                              <input id='BankTransfer' name='paymentMethod' type='radio' />
                              <label htmlFor='BankTransfer'>Direct Bank Transfer</label>
                            </div>
                            <p>
                              Make your payment directly into our bank account. Please use your
                              Order ID as the payment reference. Your order will not be shipped
                              until the funds have cleared in our account.
                            </p>
                            <div>
                              <input id='debitCredit' name='paymentMethod' type='radio' />
                              <label htmlFor='debitCredit'>Credit / Debit Card </label>
                            </div>
                            <div>
                              <input id='cod' name='paymentMethod' type='radio' checked />
                              <label htmlFor='cod'>Cash on delivery</label>
                            </div>
                            <div>
                              <input id='paypal' name='paymentMethod' type='radio' />
                              <label htmlFor='paypal'>
                                PayPal <img src={paypalLogo} alt='' /> What is PayPal?
                              </label>
                            </div>
                          </li>
                          <li className='info-bottom'>
                            Your personal data will be used to process your order, support your
                            experience throughout this website, and for other purposes described in
                            our <a href='#'>privacy policy</a>.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <button className='btn btn-primary btn-square ' type='submit'>
                        PLACE ORDER
                      </button>
                      <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                      >
                        <Alert
                          variant='filled'
                          onClose={handleClose}
                          severity='success'
                          sx={{ width: '100%' }}
                        >
                          Billing Details of {firstName} are successfully submitted!
                        </Alert>
                      </Snackbar>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
