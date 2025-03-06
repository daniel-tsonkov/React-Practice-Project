const AccessControl = require('accesscontrol');

let grantsObject = {
    admin: {},
    user: {}
};

const roles = new AccessControl();

module.exports = roles;