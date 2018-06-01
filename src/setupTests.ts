import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// const enzyme = require("enzyme");
// const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });