import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu2 = props => (
  <NavDropdown icon="th-list" name="Entities2" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="binoculars" to="/car">
      Car
    </MenuItem>
    <MenuItem icon="asterisk" to="/document">
      Document
    </MenuItem>
    <MenuItem icon="asterisk" to="/content">
      Content
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
