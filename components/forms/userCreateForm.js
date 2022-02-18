import React from 'react';
import { Col, Row } from 'react-grid-system';
import Input from '../antdform/input/input';
import FormItem from '../antdform/form-item/FormItem';

import Card from '../card/card';

const userCreateForm = () => {
  return (
    <Row>
      <Card>
        <Row gutterWidth={16}>
          <Col lg={12}>
            <FormItem htmlFor="email" label="Kullanıcı Mail" error={errors.email}>
              <Input
                autocomplate="off"
                ref={register}
                placeholder="Giriniz"
                autoFocus={user ? false : true}
                name="email"
                id="email"
              />
            </FormItem>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default userCreateForm;
