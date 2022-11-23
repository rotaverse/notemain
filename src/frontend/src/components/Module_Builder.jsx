import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { BuilderSchema } from './validation/builderSchema'
import { saveLogin } from "../state/action-creator";
const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}

export const module_builder = () => (
  <>
    <Formik
      initialValues={{
        OwnerAccount: '',
        License: '',
      }}
      validationSchema={BuilderSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
        var templog = JSON.stringify(values, null, 2)
        saveLogin( templog); {/* TODO call BlockchainComm( templog) - call API */}
        {/* <button onClick={() => depositMoney(1000)}>Deposit</button> */}
        console.log("value", values.OwnerAccount, values.License)
      }}
    >
      <Form>
        <label className={styles.label} htmlFor='OwnerAccount'>
          Owner Account
        </label>
        <Field className={styles.field} id='OwnerAccount' name='OwnerAccount' />
        <ErrorMessage component='a' className={styles.errorMsg} name='OwnerAccount' />
        <label className={styles.label} htmlFor='OwnerAccount'>
          License
        </label>
        <Field className={styles.field} id='License' name='License' />
        <ErrorMessage
          component='a'
          className={styles.errorMsg}
          name='License'
        />

        <label className={styles.label} htmlFor='Difficulty'>
          Owner Account
        </label>
        <Field className={styles.field} id='Difficulty' name='Difficulty' />
        <ErrorMessage component='a' className={styles.errorMsg} name='Difficulty' />




        <div className='mt-8'>
          <button type='submit' className={styles.button}>
            Save 
          </button>
        </div>
      </Form>
    </Formik>
  </>
)